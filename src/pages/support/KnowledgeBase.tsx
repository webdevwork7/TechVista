
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Search, FileText, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const KnowledgeBase = () => {
  const categories = [
    {
      name: "Computer Issues",
      icon: "💻",
      articles: [
        { title: "How to Fix a Slow Computer", views: 2541 },
        { title: "Troubleshooting Blue Screen Errors", views: 1893 },
        { title: "Solving Common Wi-Fi Connection Problems", views: 3210 }
      ]
    },
    {
      name: "Mobile Devices",
      icon: "📱",
      articles: [
        { title: "Extending Your Smartphone Battery Life", views: 4127 },
        { title: "How to Recover Deleted Photos", views: 3189 },
        { title: "Troubleshooting App Crashes", views: 2076 }
      ]
    },
    {
      name: "Smart Home",
      icon: "🏠",
      articles: [
        { title: "Setting Up Multiple Smart Speakers", views: 1852 },
        { title: "Fixing Smart Light Connection Issues", views: 2340 },
        { title: "Creating Smart Home Routines", views: 1675 }
      ]
    },
    {
      name: "TVs & Audio",
      icon: "📺",
      articles: [
        { title: "Fixing TV Picture Quality Problems", views: 2934 },
        { title: "Connecting Sound Systems to Your TV", views: 2105 },
        { title: "Setting Up Streaming Services", views: 3542 }
      ]
    }
  ];

  const featuredArticles = [
    {
      title: "The Ultimate Guide to Speeding Up Your Computer",
      excerpt: "Learn the top 10 ways to boost your computer's performance without expensive hardware upgrades.",
      category: "Computer Maintenance",
      readTime: "8 min read"
    },
    {
      title: "How to Protect Your Devices from Malware",
      excerpt: "Essential security tips to keep your devices safe from viruses, ransomware, and other cyber threats.",
      category: "Security",
      readTime: "6 min read"
    },
    {
      title: "Setting Up a Smart Home on a Budget",
      excerpt: "Create an effective smart home ecosystem without breaking the bank with these affordable options.",
      category: "Smart Home",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Knowledge Base</h1>
            <p className="text-lg text-gray-600 mb-8">
              Search our extensive collection of tech guides, tutorials, and troubleshooting articles.
            </p>
            
            <div className="relative max-w-2xl mx-auto">
              <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden">
                <input
                  type="text"
                  placeholder="Search knowledge base..."
                  className="w-full p-4 pl-12 outline-none text-base"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search className="h-5 w-5" />
                </div>
                <Button className="rounded-l-none">Search</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-2xl font-bold mb-10 text-center">Popular Categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                  <ul className="space-y-3">
                    {category.articles.map((article, i) => (
                      <li key={i} className="flex items-center justify-between">
                        <a href="#" className="text-blue-600 hover:underline text-sm flex-grow">{article.title}</a>
                        <span className="text-xs text-gray-500">{article.views}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button variant="outline" size="sm" className="w-full">View All</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-10 text-center">Featured Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{article.category}</span>
                      <span className="text-gray-500 text-xs ml-2">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto flex items-center text-primary">
                      Read Article <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg">Browse All Articles</Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Can't find what you're looking for?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our technical support team is ready to help you solve any tech problem you're facing.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/support/contact">
                  <Button>Contact Support</Button>
                </Link>
                <Link to="/support/faqs">
                  <Button variant="outline">View FAQs</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KnowledgeBase;
