import { Container } from '@/components/layout/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin, Instagram, Linkedin, Github, Twitter } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import Image from 'next/image';

export const metadata = {
    title: 'İletişim',
    description: 'Galatasaray Üniversitesi Matematik Topluluğu ile iletişime geçin',
};

export default function ContactPage() {
    return (
        <div className="py-16">
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">İletişim</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Sorularınız mı var? Bize ulaşın, size yardımcı olmaktan mutluluk duyarız.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {/* Contact Info Cards */}
                    <Card className="border-2 hover:border-accent transition-colors">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                                <Mail className="h-6 w-6 text-accent" />
                            </div>
                            <CardTitle>E-posta</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <a
                                href={`mailto:${SITE_CONFIG.contact.email}`}
                                className="text-muted-foreground hover:text-accent transition-colors"
                            >
                                {SITE_CONFIG.contact.email}
                            </a>
                        </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-accent transition-colors">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                                <Phone className="h-6 w-6 text-accent" />
                            </div>
                            <CardTitle>Telefon</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <a
                                href={`tel:${SITE_CONFIG.contact.phone}`}
                                className="text-muted-foreground hover:text-accent transition-colors"
                            >
                                {SITE_CONFIG.contact.phone}
                            </a>
                        </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-accent transition-colors">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                                <MapPin className="h-6 w-6 text-accent" />
                            </div>
                            <CardTitle>Adres</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                {SITE_CONFIG.contact.address}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Card className="border-2">
                        <CardHeader>
                            <CardTitle className="text-2xl">Bize Yazın</CardTitle>
                            <p className="text-muted-foreground">
                                Mesajınızı gönderin, en kısa sürede size dönüş yapalım.
                            </p>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Ad Soyad
                                    </label>
                                    <Input
                                        id="name"
                                        placeholder="Adınız ve soyadınız"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        E-posta
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="ornek@email.com"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Konu
                                    </label>
                                    <Input
                                        id="subject"
                                        placeholder="Mesaj konusu"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Mesaj
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="Mesajınızı buraya yazın..."
                                        className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                    />
                                </div>
                                <Button size="lg" className="w-full">
                                    Mesaj Gönder
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Map & Social Media */}
                    <div className="space-y-8">
                        {/* Logo */}
                        <Card className="border-2">
                            <CardHeader>
                                <CardTitle>Kurumsal Kimlik</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-center p-8 bg-muted/30 rounded-lg">
                                    <Image
                                        src="/images/logos/gsumathsoc.png"
                                        alt="GSU Matematik Topluluğu"
                                        width={150}
                                        height={150}
                                        className="object-contain"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Social Media */}
                        <Card className="border-2">
                            <CardHeader>
                                <CardTitle>Sosyal Medya</CardTitle>
                                <p className="text-muted-foreground">
                                    Bizi sosyal medyada takip edin
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                    {SITE_CONFIG.links.social.map((social) => {
                                        const Icon = social.icon === 'instagram' ? Instagram
                                            : social.icon === 'twitter' ? Twitter
                                                : social.icon === 'linkedin' ? Linkedin
                                                    : Github;

                                        return (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-4 rounded-lg border-2 hover:border-accent hover:bg-accent/5 transition-all group"
                                            >
                                                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                                                <span className="font-medium">{social.label}</span>
                                            </a>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Office Hours */}
                        <Card className="border-2 bg-gradient-to-br from-accent/10 to-accent/5">
                            <CardHeader>
                                <CardTitle>Ofis Saatleri</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Pazartesi - Cuma</span>
                                    <span className="font-medium">09:00 - 17:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Cumartesi</span>
                                    <span className="font-medium">10:00 - 14:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Pazar</span>
                                    <span className="font-medium">Kapalı</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    );
}
