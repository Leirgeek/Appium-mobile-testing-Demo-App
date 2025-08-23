import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Volume2, 
  Monitor, 
  Save,
  RotateCcw
} from "lucide-react";

const Settings = () => {
  const { toast } = useToast();
  
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      marketing: true,
      updates: true
    },
    privacy: {
      profileVisible: true,
      dataSharing: false,
      analytics: true
    },
    appearance: {
      theme: "dark",
      fontSize: "medium",
      animations: true,
      compactMode: false
    },
    audio: {
      soundEffects: true,
      volume: [75],
      notifications: true
    }
  });

  const handleSwitchChange = (category: string, setting: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [setting]: value
      }
    }));
  };

  const handleSelectChange = (category: string, setting: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [setting]: value
      }
    }));
  };

  const handleSliderChange = (category: string, setting: string, value: number[]) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [setting]: value
      }
    }));
  };

  const handleSave = () => {
    toast({
      title: "Settings Saved!",
      description: "Your preferences have been updated successfully.",
    });
  };

  const handleReset = () => {
    toast({
      title: "Settings Reset",
      description: "All settings have been restored to defaults.",
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-hero-gradient bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Customize your experience with our comprehensive settings panel. 
          Perfect for testing toggles, sliders, and form interactions.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Notifications */}
        <Card className="glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Bell className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive notifications via email</p>
              </div>
              <Switch
                checked={settings.notifications.email}
                onCheckedChange={(value) => handleSwitchChange("notifications", "email", value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Push Notifications</Label>
                <p className="text-sm text-muted-foreground">Browser push notifications</p>
              </div>
              <Switch
                checked={settings.notifications.push}
                onCheckedChange={(value) => handleSwitchChange("notifications", "push", value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Marketing Updates</Label>
                <p className="text-sm text-muted-foreground">Product news and updates</p>
              </div>
              <Switch
                checked={settings.notifications.marketing}
                onCheckedChange={(value) => handleSwitchChange("notifications", "marketing", value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>System Updates</Label>
                <p className="text-sm text-muted-foreground">Important system notifications</p>
              </div>
              <Switch
                checked={settings.notifications.updates}
                onCheckedChange={(value) => handleSwitchChange("notifications", "updates", value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Privacy */}
        <Card className="glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>Control your privacy settings</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Public Profile</Label>
                <p className="text-sm text-muted-foreground">Make your profile visible to others</p>
              </div>
              <Switch
                checked={settings.privacy.profileVisible}
                onCheckedChange={(value) => handleSwitchChange("privacy", "profileVisible", value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Data Sharing</Label>
                <p className="text-sm text-muted-foreground">Share usage data for improvements</p>
              </div>
              <Switch
                checked={settings.privacy.dataSharing}
                onCheckedChange={(value) => handleSwitchChange("privacy", "dataSharing", value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Analytics</Label>
                <p className="text-sm text-muted-foreground">Allow usage analytics</p>
              </div>
              <Switch
                checked={settings.privacy.analytics}
                onCheckedChange={(value) => handleSwitchChange("privacy", "analytics", value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card className="glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Palette className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize the look and feel</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label>Theme</Label>
              <Select 
                value={settings.appearance.theme}
                onValueChange={(value) => handleSelectChange("appearance", "theme", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <Label>Font Size</Label>
              <Select 
                value={settings.appearance.fontSize}
                onValueChange={(value) => handleSelectChange("appearance", "fontSize", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Animations</Label>
                <p className="text-sm text-muted-foreground">Enable smooth animations</p>
              </div>
              <Switch
                checked={settings.appearance.animations}
                onCheckedChange={(value) => handleSwitchChange("appearance", "animations", value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Compact Mode</Label>
                <p className="text-sm text-muted-foreground">Reduce spacing and padding</p>
              </div>
              <Switch
                checked={settings.appearance.compactMode}
                onCheckedChange={(value) => handleSwitchChange("appearance", "compactMode", value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Audio */}
        <Card className="glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Volume2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>Audio Settings</CardTitle>
                <CardDescription>Configure sound preferences</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Sound Effects</Label>
                <p className="text-sm text-muted-foreground">Enable UI sound effects</p>
              </div>
              <Switch
                checked={settings.audio.soundEffects}
                onCheckedChange={(value) => handleSwitchChange("audio", "soundEffects", value)}
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>Master Volume</Label>
                <span className="text-sm text-muted-foreground">{settings.audio.volume[0]}%</span>
              </div>
              <Slider
                value={settings.audio.volume}
                onValueChange={(value) => handleSliderChange("audio", "volume", value)}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Notification Sounds</Label>
                <p className="text-sm text-muted-foreground">Play sounds for notifications</p>
              </div>
              <Switch
                checked={settings.audio.notifications}
                onCheckedChange={(value) => handleSwitchChange("audio", "notifications", value)}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <Card className="glass-card">
        <CardContent className="flex flex-col sm:flex-row gap-4 justify-between items-center p-6">
          <div className="text-center sm:text-left">
            <h3 className="font-semibold">Settings Management</h3>
            <p className="text-sm text-muted-foreground">
              Save your changes or reset to default settings
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleReset}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
            <Button onClick={handleSave} className="hero-button">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;