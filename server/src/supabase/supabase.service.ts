// supabase/supabase.service.ts
import { Injectable, Scope } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import * as process from "process";

@Injectable({ scope: Scope.REQUEST })
export class SupabaseService {
  private client: SupabaseClient;

  constructor() {
    const supabaseUrl: string = process.env.SUPABASE_URL ?? '';
    const supabaseAnonKey: string = process.env.SUPABASE_ANON_KEY ?? '';
    this.client = createClient(
      supabaseUrl,
      supabaseAnonKey,
    );
  }

  getClient(): SupabaseClient {
    return this.client;
  }
}
