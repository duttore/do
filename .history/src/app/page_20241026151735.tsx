"use client";
import { useState } from 'react';
import { Menu, Phone, Wrench, Info, MessageSquare, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  const services = [
    {
      name: 'Riparazioni',
      icon: <Wrench className="h-6 w-6" />,
      description: 'Riparazioni complete per ogni tipo di macchina da cucire, meccanica o elettronica.'
    },
    {
      name: 'Manutenzione',
      icon: <MessageSquare className="h-6 w-6" />,
      description: 'Controllo e manutenzione preventiva per mantenere la macchina in condizioni ottimali.'
    },
    {
      name: 'Consulenza',
      icon: <Info className="h-6 w-6" />,
      description: 'Consulenza personalizzata per l\'acquisto di nuove macchine da cucire e accessori.'
    }
  ];

  const testimonials = [
    {
      text: "Servizio eccellente e riparazione veloce. La mia macchina da cucire funziona come nuova!",
      name: "Maria Rossi"
    },
    {
      text: "Personale qualificato e molto disponibile. Consiglio vivamente!",
      name: "Luca Bianchi"
    },
    {
      text: "Ottimo servizio di consulenza per l'acquisto della mia nuova macchina da cucire.",
      name: "Federica Verdi"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2 font-bold" href="#">
              Stefano Ricci
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#servizi" className="transition-colors hover:text-primary">Servizi</a>
              <a href="#chi-sono" className="transition-colors hover:text-primary">Chi Sono</a>
              <a href="#contatti" className="transition-colors hover:text-primary">Contatti</a>
            </nav>
          </div>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                <a href="#servizi" className="flex items-center space-x-2 text-sm">
                  <Wrench className="h-4 w-4" />
                  <span>Servizi</span>
                </a>
                <a href="#chi-sono" className="flex items-center space-x-2 text-sm">
                  <Info className="h-4 w-4" />
                  <span>Chi Sono</span>
                </a>
                <a href="#contatti" className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>Contatti</span>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Assistenza Professionale per Macchine da Cucire
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Riparazioni rapide ed efficienti per garantire il massimo delle prestazioni della tua macchina da cucire.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Scopri i servizi
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* WhatsApp Banner */}
      <div className="bg-green-500 text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-base flex items-center justify-center">
            <Phone className="mr-2 h-4 w-4" />
            Contattami su WhatsApp: <span className="font-bold ml-2">+39 334 315 6903</span>
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section id="servizi" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">I nostri servizi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {service.icon}
                    <span>{service.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Cosa dicono i nostri clienti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contattami</h2>
          <p className="text-lg text-gray-600 mb-8">
            Per richiedere informazioni o prenotare un appuntamento, puoi contattarmi anche su WhatsApp.
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600">
            <Phone className="mr-2 h-4 w-4" />
            +39 334 315 6903
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 Stefano Ricci - Tutti i diritti riservati</p>
        </div>
      </footer>
    </div>
  );
}