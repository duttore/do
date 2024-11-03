import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MessageSquare, Star, TrendingUp, Users, Clock, Heart, Share2, Camera, BookOpen } from 'lucide-react';

// Base Components
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
    {children}
  </div>
);

const Button = ({ children, variant = 'default', className = '', ...props }) => {
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    ghost: 'text-gray-600 hover:bg-gray-100',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  };

  return (
    <button 
      className={`px-4 py-2 rounded-md transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Input = ({ className = '', ...props }) => (
  <input
    className={`w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

const Badge = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    outline: 'border border-gray-300 text-gray-600',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};

const Tabs = ({ children }) => (
  <div className="space-y-4">{children}</div>
);

const TabsList = ({ children }) => (
  <div className="flex space-x-4 border-b border-gray-200">
    {children}
  </div>
);

const TabsTrigger = ({ children, isActive, onClick }) => (
  <button
    className={`px-4 py-2 font-medium ${
      isActive 
        ? 'text-blue-600 border-b-2 border-blue-600' 
        : 'text-gray-600 hover:text-gray-900'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const TabsContent = ({ children, value, activeTab }) => (
  <div className={value === activeTab ? 'block' : 'hidden'}>
    {children}
  </div>
);

export default function ForumPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("latest");

  // Categories
  const categories = [
    { id: "all", name: "All Topics", icon: BookOpen },
    { id: "vintage", name: "Vintage Machines", icon: Camera },
    { id: "modern", name: "Modern Models", icon: Star },
    { id: "techniques", name: "Techniques", icon: TrendingUp },
    { id: "help", name: "Help & Support", icon: MessageSquare },
  ];

  // Forum posts data
  const forumPosts = [
    {
      id: 1,
      category: "vintage",
      title: "Restoring a 1947 Singer 201-2: Complete Guide",
      author: {
        name: "VintageSewer",
        avatar: "/api/placeholder/32/32",
      },
      preview: "I've just completed restoring my grandmother's Singer 201-2 and wanted to share the complete process...",
      likes: 234,
      comments: 56,
      views: 1205,
      timeAgo: "2 hours ago",
      tags: ["restoration", "vintage", "201-2"],
      pinned: true,
    },
    {
      id: 2,
      category: "modern",
      title: "Singer Quantum Stylist 9960: Hidden Features",
      author: {
        name: "ModernMaker",
        avatar: "/api/placeholder/32/32",
      },
      preview: "After using the Quantum Stylist for 6 months, I've discovered some amazing hidden features...",
      likes: 189,
      comments: 43,
      views: 890,
      timeAgo: "5 hours ago",
      tags: ["modern", "quantum-stylist", "tips"],
    },
  ];

  // Trending topics
  const trendingTopics = [
    "Singer Heavy Duty 4452 Review",
    "Vintage vs Modern Debate",
    "Best Oil for Singer Machines",
    "Computerized Models Guide",
  ];

  // Stats component
  const ForumStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {[
        { icon: Users, label: "Members", value: "12,458" },
        { icon: MessageSquare, label: "Discussions", value: "45,789" },
        { icon: Clock, label: "Hours Shared", value: "98,234" },
        { icon: Heart, label: "Projects Shared", value: "23,456" },
      ].map((stat, index) => (
        <Card key={index} className="text-center">
          <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-500" />
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
        </Card>
      ))}
    </div>
  );

  // Post card component
  const PostCard = ({ post }) => (
    <Card className="mb-4 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
              <img src={post.author.avatar} alt={post.author.name} />
            </div>
            <div>
              <h3 className="text-lg font-semibold hover:text-blue-600 cursor-pointer">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500">
                Posted by {post.author.name} • {post.timeAgo}
              </p>
            </div>
          </div>
          {post.pinned && (
            <Badge variant="secondary">Pinned</Badge>
          )}
        </div>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">{post.preview}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <div className="flex space-x-4">
          <Button variant="ghost" className="flex items-center">
            <Heart className="w-4 h-4 mr-2" />
            {post.likes}
          </Button>
          <Button variant="ghost" className="flex items-center">
            <MessageSquare className="w-4 h-4 mr-2" />
            {post.comments}
          </Button>
          <Button variant="ghost" className="flex items-center">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
        <span>{post.views} views</span>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Singer Sewing Machines Forum - Join the Community | Discuss, Learn & Share</title>
        <meta name="description" content="Connect with Singer sewing enthusiasts, share projects, get machine advice, and discover techniques. Join our active community of sewists and makers." />
        <meta name="keywords" content="Singer sewing machines, sewing forum, sewing community, sewing tips, machine maintenance, vintage Singer, modern Singer, sewing projects" />
        <meta property="og:title" content="Singer Sewing Machines Forum - Join the Community" />
        <meta property="og:description" content="Connect with Singer sewing enthusiasts, share projects, get machine advice, and discover techniques." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://example.com/forum" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Welcome to the Singer Community
          </motion.h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of sewing enthusiasts sharing knowledge, projects, and passion
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                type="search"
                placeholder="Search discussions..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <ForumStats />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </Card>

            <Card className="mt-4">
              <h2 className="text-xl font-bold mb-4">Trending Topics</h2>
              <ul className="space-y-2">
                {trendingTopics.map((topic, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="hover:text-blue-600 cursor-pointer">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Posts Feed */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Latest Discussions</h2>
              <Button>
                Start Discussion
              </Button>
            </div>

            <Tabs>
              <TabsList>
                <TabsTrigger 
                  isActive={activeTab === "latest"}
                  onClick={() => setActiveTab("latest")}
                >
                  Latest
                </TabsTrigger>
                <TabsTrigger 
                  isActive={activeTab === "trending"}
                  onClick={() => setActiveTab("trending")}
                >
                  Trending
                </TabsTrigger>
                <TabsTrigger 
                  isActive={activeTab === "unanswered"}
                  onClick={() => setActiveTab("unanswered")}
                >
                  Unanswered
                </TabsTrigger>
              </TabsList>

              <TabsContent value="latest" activeTab={activeTab}>
                <AnimatePresence>
                  {forumPosts
                    .filter(post => activeCategory === "all" || post.category === activeCategory)
                    .map((post) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <PostCard post={post} />
                      </motion.div>
                    ))}
                </AnimatePresence>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About</h3>
              <p className="text-gray-400">
                The largest online community for Singer sewing machine enthusiasts.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/guidelines" className="hover:text-white">Community Guidelines</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                {/* Add social media icons/links here */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Singer Machines Forum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}