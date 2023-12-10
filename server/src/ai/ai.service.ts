import { Injectable, Logger } from '@nestjs/common';
import {IAnalyzeAssetJob} from "@app/domain";
import { OpenAI } from 'openai';

@Injectable()
export class AiService {
  private logger = new Logger(AiService.name);
  private readonly client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async init() {}

  getClient(): OpenAI {
    return this.client;
  }

  async handleAnalyzeAsset(data: IAnalyzeAssetJob) : Promise<boolean> {
    return true;
  }
}
