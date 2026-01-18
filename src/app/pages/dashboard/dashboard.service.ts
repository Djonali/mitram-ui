import { Injectable } from '@angular/core';
//import { GoogleGenAI, Type } from "@google/genai";

export interface WellnessInsight {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  //private ai = new GoogleGenAI({ apiKey: (window as any).process?.env?.API_KEY || "" });

  async getWellnessInsight(): Promise<WellnessInsight> {
    return Promise.resolve({
      title: 'Wellness Insight',
      description: 'This is a wellness insight'
    });
  }

  async getAffirmation(): Promise<string> {
    return Promise.resolve('This is an affirmation');
  }
}
