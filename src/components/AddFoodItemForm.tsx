"use client";

import React, { useState, ChangeEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabaseClient";

interface Task {
  id: number;
  title: string;
  description: string;
  created_at: string;
  image_url: string;
}

export default function AddFoodItemForm() {
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [taskImage, setTaskImage] = useState<File | null>(null);
  const [success, setSuccess] = useState(false);

  const uploadImage = async (file: File): Promise<string | null> => {
    const filePath = `${file.name}-${Date.now()}`;
    const { error } = await supabase.storage
      .from("food-images")
      .upload(filePath, file);

    if (error) {
      console.error("Image upload error:", error.message);
      return null;
    }

    const { data } = await supabase.storage
      .from("food-images")
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    let imageUrl: string | null = null;

    if (taskImage) {
      imageUrl = await uploadImage(taskImage);
    }

    const { error } = await supabase.from("food_items").insert({
      title: newTask.title,
      description: newTask.description,
      image_url: imageUrl,
    });

    if (error) {
      console.error("Insert error:", error.message);
      return;
    }

    setNewTask({ title: "", description: "" });
    setTaskImage(null);
    setSuccess(true);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-6">
      <Card className="shadow-lg">
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={newTask.title}
                onChange={(e) =>
                  setNewTask((prev) => ({ ...prev, title: e.target.value }))
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newTask.description}
                onChange={(e) =>
                  setNewTask((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                rows={4}
                required
              />
            </div>
            <div>
              <Label htmlFor="image">Image</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files?.[0]) {
                    setTaskImage(e.target.files[0]);
                  }
                }}
              />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
            {success && (
              <p className="text-green-600 text-sm mt-2 text-center">
                Task created successfully!
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
