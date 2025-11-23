import { Container } from '@/components/layout/container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    BookOpen,
    Video,
    FileText,
    Calculator,
    ExternalLink,
    Download,
    GraduationCap,
    Lightbulb
} from 'lucide-react';

export const metadata = {
    title: 'Kaynaklar',
    description: 'Matematik öğrenme kaynakları, ders notları ve faydalı linkler',
};

const resources = {
    books: [
        {
            title: 'Calculus: Early Transcendentals',
            author: 'James Stewart',
            category: 'Analiz',
            description: 'Kalkülüs için kapsamlı bir kaynak. Temel kavramlardan ileri konulara.',
        },
        {
            title: 'Linear Algebra and Its Applications',
            author: 'Gilbert Strang',
            category: 'Lineer Cebir',
            description: 'Lineer cebir temelleri ve uygulamaları için mükemmel kaynak.',
        },
        {
            title: 'Introduction to Topology',
            author: 'Bert Mendelson',
            category: 'Topoloji',
            description: 'Topolojiye giriş için anlaşılır ve kapsamlı bir metin.',
        },
    ],
    videos: [
        {
            title: '3Blue1Brown',
            link: 'https://www.youtube.com/@3blue1brown',
            description: 'Görsel matematik videoları. Lineer cebir, kalkülüs ve daha fazlası.',
            topics: ['Analiz', 'Lineer Cebir', 'Diferansiyel Denklemler'],
        },
        {
            title: 'MIT OpenCourseWare',
            link: 'https://ocw.mit.edu/courses/mathematics/',
            description: 'MIT\'nin ücretsiz ders materyalleri. Video dersler ve notlar.',
            topics: ['Çeşitli Konular', 'Lisans', 'Lisansüstü'],
        },
        {
            title: 'Khan Academy',
            link: 'https://www.khanacademy.org/math',
            description: 'Temel matematikten ileri konulara interaktif dersler.',
            topics: ['Temel Matematik', 'İstatistik', 'Olasılık'],
        },
    ],
    tools: [
        {
            title: 'Wolfram Alpha',
            link: 'https://www.wolframalpha.com/',
            description: 'Güçlü hesaplama motoru. Denklem çözme, grafik çizme ve daha fazlası.',
            icon: Calculator,
        },
        {
            title: 'Desmos',
            link: 'https://www.desmos.com/calculator',
            description: 'Ücretsiz online grafik hesap makinesi. Fonksiyon görselleştirme.',
            icon: Calculator,
        },
        {
            title: 'LaTeX Equation Editor',
            link: 'https://latexeditor.lagrida.com/',
            description: 'Matematiksel denklemler için LaTeX editörü.',
            icon: FileText,
        },
        {
            title: 'Symbolab',
            link: 'https://www.symbolab.com/',
            description: 'Adım adım matematik problemi çözücü.',
            icon: Calculator,
        },
    ],
    studyGuides: [
        {
            title: 'Kalkülüs I Ders Notları',
            topics: ['Limitler', 'Türev', 'İntegral'],
            level: 'Başlangıç',
        },
        {
            title: 'Lineer Cebir Özeti',
            topics: ['Matrisler', 'Determinant', 'Özdeğerler'],
            level: 'Orta',
        },
        {
            title: 'Soyut Cebir Formüller',
            topics: ['Gruplar', 'Halkalar', 'Cisimler'],
            level: 'İleri',
        },
        {
            title: 'Diferansiyel Denklemler',
            topics: ['1. Derece', '2. Derece', 'Laplace Dönüşümü'],
            level: 'Orta',
        },
    ],
};

export default function ResourcesPage() {
    return (
        <div className="py-16">
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Kaynaklar</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Matematik çalışmalarınız için derlenmiş kitaplar, videolar ve araçlar
                    </p>
                </div>

                {/* Books Section */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                            <BookOpen className="h-6 w-6 text-accent" />
                        </div>
                        <h2 className="text-3xl font-bold">Önerilen Kitaplar</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {resources.books.map((book, index) => (
                            <Card key={index} className="border-2 hover:border-accent transition-colors">
                                <CardHeader>
                                    <Badge className="w-fit mb-2" variant="secondary">
                                        {book.category}
                                    </Badge>
                                    <CardTitle className="text-xl">{book.title}</CardTitle>
                                    <CardDescription className="text-base">
                                        {book.author}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{book.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Video Resources */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Video className="h-6 w-6 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold">Video Kaynakları</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {resources.videos.map((video, index) => (
                            <Card key={index} className="border-2 hover:border-primary transition-colors group">
                                <CardHeader>
                                    <CardTitle className="text-xl flex items-center justify-between">
                                        {video.title}
                                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground">{video.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {video.topics.map((topic, i) => (
                                            <Badge key={i} variant="outline" className="text-xs">
                                                {topic}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Button asChild variant="outline" className="w-full">
                                        <a href={video.link} target="_blank" rel="noopener noreferrer">
                                            Ziyaret Et
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Online Tools */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                            <Calculator className="h-6 w-6 text-secondary" />
                        </div>
                        <h2 className="text-3xl font-bold">Online Araçlar</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {resources.tools.map((tool, index) => {
                            const Icon = tool.icon;
                            return (
                                <Card key={index} className="border-2 hover:border-secondary transition-colors group">
                                    <CardHeader>
                                        <Icon className="h-8 w-8 text-secondary mb-2" />
                                        <CardTitle className="text-lg">{tool.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                                        <Button asChild size="sm" variant="outline" className="w-full">
                                            <a href={tool.link} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                Aç
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </section>

                {/* Study Guides */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                            <GraduationCap className="h-6 w-6 text-accent" />
                        </div>
                        <h2 className="text-3xl font-bold">Ders Notları & Rehberler</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {resources.studyGuides.map((guide, index) => (
                            <Card key={index} className="border-2 hover:shadow-lg transition-all">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge
                                            variant={guide.level === 'İleri' ? 'default' : 'secondary'}
                                            className={guide.level === 'İleri' ? 'bg-primary' : guide.level === 'Orta' ? 'bg-accent text-accent-foreground' : ''}
                                        >
                                            {guide.level}
                                        </Badge>
                                        <FileText className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-1">
                                        {guide.topics.map((topic, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Lightbulb className="h-3 w-3 text-accent" />
                                                {topic}
                                            </div>
                                        ))}
                                    </div>
                                    <Button size="sm" variant="outline" className="w-full">
                                        <Download className="h-4 w-4 mr-2" />
                                        İndir (PDF)
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Help Section */}
                <Card className="mt-16 border-2 bg-gradient-to-br from-accent/5 to-primary/5">
                    <CardContent className="p-8 text-center">
                        <h3 className="text-2xl font-bold mb-4">Yardıma mı ihtiyacınız var?</h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Belirli bir konuda kaynak arıyorsanız veya öneriniz varsa bizimle iletişime geçin.
                        </p>
                        <Button size="lg" asChild>
                            <a href="/contact">İletişime Geç</a>
                        </Button>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}
