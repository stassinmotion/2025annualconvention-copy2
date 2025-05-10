export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      contact_messages: {
        Row: {
          created_at: string | null
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          status: string
          subject: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          status?: string
          subject: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          status?: string
          subject?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      county_registrations: {
        Row: {
          attending_days: string[]
          county: string
          created_at: string | null
          dietary_restrictions: string | null
          email: string
          emergency_contact_name: string
          emergency_contact_phone: string
          first_name: string
          id: string
          last_name: string
          payment_method: string
          payment_status: string
          phone: string
          position: string
          registration_date: string | null
          special_accommodations: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          attending_days: string[]
          county: string
          created_at?: string | null
          dietary_restrictions?: string | null
          email: string
          emergency_contact_name: string
          emergency_contact_phone: string
          first_name: string
          id?: string
          last_name: string
          payment_method: string
          payment_status?: string
          phone: string
          position: string
          registration_date?: string | null
          special_accommodations?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          attending_days?: string[]
          county?: string
          created_at?: string | null
          dietary_restrictions?: string | null
          email?: string
          emergency_contact_name?: string
          emergency_contact_phone?: string
          first_name?: string
          id?: string
          last_name?: string
          payment_method?: string
          payment_status?: string
          phone?: string
          position?: string
          registration_date?: string | null
          special_accommodations?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "county_registrations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          end_time: string
          id: string
          location: string | null
          speaker: string | null
          start_time: string
          title: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          end_time: string
          id?: string
          location?: string | null
          speaker?: string | null
          start_time: string
          title: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          end_time?: string
          id?: string
          location?: string | null
          speaker?: string | null
          start_time?: string
          title?: string
        }
        Relationships: []
      }
      exhibitors: {
        Row: {
          booth_number: string
          category: string | null
          created_at: string | null
          description: string
          id: string
          logo_url: string | null
          name: string
          updated_at: string | null
          website_url: string | null
        }
        Insert: {
          booth_number: string
          category?: string | null
          created_at?: string | null
          description: string
          id?: string
          logo_url?: string | null
          name: string
          updated_at?: string | null
          website_url?: string | null
        }
        Update: {
          booth_number?: string
          category?: string | null
          created_at?: string | null
          description?: string
          id?: string
          logo_url?: string | null
          name?: string
          updated_at?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      hotels: {
        Row: {
          address: string
          amenities: string[] | null
          booking_code: string
          booking_url: string
          created_at: string | null
          deadline: string
          description: string
          distance_to_venue: string
          id: string
          image_url: string | null
          name: string
          rate: string
          updated_at: string | null
        }
        Insert: {
          address: string
          amenities?: string[] | null
          booking_code: string
          booking_url: string
          created_at?: string | null
          deadline: string
          description: string
          distance_to_venue: string
          id?: string
          image_url?: string | null
          name: string
          rate: string
          updated_at?: string | null
        }
        Update: {
          address?: string
          amenities?: string[] | null
          booking_code?: string
          booking_url?: string
          created_at?: string | null
          deadline?: string
          description?: string
          distance_to_venue?: string
          id?: string
          image_url?: string | null
          name?: string
          rate?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      news: {
        Row: {
          author: string
          category: string | null
          content: string
          created_at: string | null
          date: string
          id: string
          image_url: string | null
          published: boolean | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author: string
          category?: string | null
          content: string
          created_at?: string | null
          date: string
          id?: string
          image_url?: string | null
          published?: boolean | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: string
          category?: string | null
          content?: string
          created_at?: string | null
          date?: string
          id?: string
          image_url?: string | null
          published?: boolean | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      news_updates: {
        Row: {
          content: string
          created_at: string | null
          id: string
          image_url: string | null
          published_at: string | null
          title: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          published_at?: string | null
          title: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          published_at?: string | null
          title?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          first_name: string | null
          id: string
          last_name: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      session_speakers: {
        Row: {
          created_at: string | null
          id: string
          session_id: string
          speaker_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          session_id: string
          speaker_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          session_id?: string
          speaker_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_speakers_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_speakers_speaker_id_fkey"
            columns: ["speaker_id"]
            isOneToOne: false
            referencedRelation: "speakers"
            referencedColumns: ["id"]
          },
        ]
      }
      sessions: {
        Row: {
          capacity: number | null
          created_at: string | null
          date: string
          description: string
          end_time: string
          id: string
          location: string
          start_time: string
          title: string
          type: string
          updated_at: string | null
        }
        Insert: {
          capacity?: number | null
          created_at?: string | null
          date: string
          description: string
          end_time: string
          id?: string
          location: string
          start_time: string
          title: string
          type: string
          updated_at?: string | null
        }
        Update: {
          capacity?: number | null
          created_at?: string | null
          date?: string
          description?: string
          end_time?: string
          id?: string
          location?: string
          start_time?: string
          title?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      speakers: {
        Row: {
          bio: string
          created_at: string | null
          featured: boolean | null
          id: string
          image_url: string | null
          name: string
          organization: string
          title: string
          updated_at: string | null
        }
        Insert: {
          bio: string
          created_at?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          name: string
          organization: string
          title: string
          updated_at?: string | null
        }
        Update: {
          bio?: string
          created_at?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          name?: string
          organization?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      sponsors: {
        Row: {
          created_at: string | null
          description: string
          id: string
          level: string
          logo_url: string | null
          name: string
          updated_at: string | null
          website_url: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          level: string
          logo_url?: string | null
          name: string
          updated_at?: string | null
          website_url?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          level?: string
          logo_url?: string | null
          name?: string
          updated_at?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      user_schedule: {
        Row: {
          created_at: string | null
          event_description: string | null
          event_id: string
          event_location: string | null
          event_time: string
          event_title: string
          event_type: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          event_description?: string | null
          event_id: string
          event_location?: string | null
          event_time: string
          event_title: string
          event_type: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          event_description?: string | null
          event_id?: string
          event_location?: string | null
          event_time?: string
          event_title?: string
          event_type?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          role: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          role?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          role?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      vendor_registrations: {
        Row: {
          address: string
          booth_number: string | null
          booth_preference: string[] | null
          city: string
          company_name: string
          contact_name: string
          created_at: string | null
          email: string
          id: string
          payment_method: string
          payment_status: string
          phone: string
          registration_date: string | null
          special_requirements: string | null
          sponsorship_level: string
          state: string
          updated_at: string | null
          user_id: string | null
          website_url: string | null
          zip: string
        }
        Insert: {
          address: string
          booth_number?: string | null
          booth_preference?: string[] | null
          city: string
          company_name: string
          contact_name: string
          created_at?: string | null
          email: string
          id?: string
          payment_method: string
          payment_status?: string
          phone: string
          registration_date?: string | null
          special_requirements?: string | null
          sponsorship_level?: string
          state: string
          updated_at?: string | null
          user_id?: string | null
          website_url?: string | null
          zip: string
        }
        Update: {
          address?: string
          booth_number?: string | null
          booth_preference?: string[] | null
          city?: string
          company_name?: string
          contact_name?: string
          created_at?: string | null
          email?: string
          id?: string
          payment_method?: string
          payment_status?: string
          phone?: string
          registration_date?: string | null
          special_requirements?: string | null
          sponsorship_level?: string
          state?: string
          updated_at?: string | null
          user_id?: string | null
          website_url?: string | null
          zip?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_registrations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      set_user_as_admin: {
        Args: { user_email: string }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
