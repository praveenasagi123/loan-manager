import { IVideo } from "@/models/Video";
import VideoComponent from "./VideoComponent";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { VideoIcon, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoFeedProps {
  videos: IVideo[];
}

export default function VideoFeed({ videos }: VideoFeedProps) {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.length > 0 ? (
            videos.map((video) => (
              <Card
                key={video._id?.toString()}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 bg-card"
              >
                <CardContent className="p-0">
                  <VideoComponent video={video} />
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full">
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-16 px-4 text-center space-y-4">
                  <div className="rounded-full bg-primary/10 p-4">
                    <VideoIcon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold tracking-tight">
                      No videos yet
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                      Get started by uploading your first video. Share your content with the world!
                    </p>
                  </div>
                  <Button className="mt-4" size="lg">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Video
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </ScrollArea>
  );
}