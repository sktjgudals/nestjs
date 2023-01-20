import { google } from 'googleapis';
import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:4000/auth/google/callback', // server redirect url handler
);

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async googleLink() {
    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/userinfo.email'],
      prompt: 'consent',
    });
    return { url };
  }

  async googleCallback(req: Request, res: Response) {
    const code: any = req.query.code;
    oauth2Client.getToken(code, (err: any, tokens) => {
      if (err) {
        console.log('server 39 | error', err);
        throw new Error('Issue with Login');
      }
      console.log(tokens);
      const accessToken = tokens.access_token;
      const refreshToken = tokens.refresh_token;
      res.redirect(
        `http://localhost:3000/auth?accessToken=${accessToken}&refreshToken=${refreshToken}`,
      );
    });
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async validToken(req: Request, res: Response) {
    if (req.headers.authorization) {
      return res
        .status(200)
        .json(this.jwtService.verify(req.headers.authorization));
    } else {
      return res.status(200).json(null);
    }
  }

  async getValidToken(body, res) {
    try {
      const req: AxiosResponse = await axios.post(
        'https://www.googleapis.com/oauth2/v4/token',
        {
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          refresh_token: body.refreshToken,
          grant_type: 'refresh_token',
        },
        {
          headers: {
            accept: 'application/json',
          },
        },
      );
      console.log(req.data, body.refreshToken);
      const data = await req.data;
      const ticket = await oauth2Client.verifyIdToken({
        idToken: data.id_token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      const email = payload['email'];
      // const database = this prisma.list.findMany({ where: { email: email } });
      // if (database) {
      //   const token = this.jwtService.sign({ email: database.email, userId: database.memberId, })
      //   res.json({access_token:token});
      // } else {
      //   this prisma.member.create({email:email,password: });
      // }
      res.json({ access_token: this.jwtService.sign(payload) });
    } catch (e) {
      console.log(e);
    }
  }
}
