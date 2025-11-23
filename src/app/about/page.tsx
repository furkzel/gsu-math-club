import type { Metadata } from 'next';
import { Container } from '@/components/layout/container';
import { MemberGrid } from '@/components/features/community/member-grid';
import { Card, CardContent } from '@/components/ui/card';
import { BOARD_MEMBERS } from '@/lib/mock-data';
import { Target, Heart, Lightbulb, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Hakkımızda - GSU Matematik Topluluğu',
    description: 'Topluluğumuzun misyonu, değerleri ve ekibi hakkında bilgi edinin.',
};

/**
 * About page showcasing mission, values, and board members
 */
export default function AboutPage() {
    const values = [
        {
            icon: Target,
            title: 'Mükemmeliyet',
            description: 'Tüm matematiksel çabalarda akademik ve kişisel mükemmeliyet için çaba göstermek.',
        },
        {
            icon: Heart,
            title: 'Topluluk',
            description: 'Her üyenin değerli ve desteklendiğini hissettiği kapsayıcı bir ortam oluşturmak.',
        },
        {
            icon: Lightbulb,
            title: 'Yenilikçilik',
            description: 'Yaratıcı problem çözmeyi teşvik etmek ve yeni matematiksel alanları keşfetmek.',
        },
        {
            icon: Users,
            title: 'İşbirliği',
            description: 'Takım çalışmasını ve akran öğrenimini teşvik ederek kolektif büyümeyi sağlamak.',
        },
    ];

    return (
        <div className="py-16">
            <Container>
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Hakkımızda</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Matematik öğrencileri ve meraklılarından oluşan tutkulu bir topluluğuz,
                        akademik büyümeyi, işbirliğini ve yaşam boyu öğrenmeyi teşvik etmeye adanmış.
                    </p>
                </div>

                {/* Mission Statement */}
                <Card className="mb-16">
                    <CardContent className="p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-6 text-center">Misyonumuz</h2>
                        <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
                            Kapsayıcı ve canlı bir topluluk oluşturmak, matematik öğrencilerinin bağlantı kurmasını,
                            öğrenmesini ve birlikte büyümesini sağlamak. Öğrencilerin akademik hedeflerine ulaşmalarını
                            ve matematiğin güzelliğine derin bir takdir geliştirmelerini sağlayan kaynaklar, mentorluk ve
                            fırsatlar sunuyoruz.
                        </p>
                    </CardContent>
                </Card>

                {/* Values Grid */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Değerlerimiz</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <Card key={value.title} className="text-center">
                                    <CardContent className="p-6">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                                        <p className="text-sm text-muted-foreground">{value.description}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Board Members */}
                <MemberGrid members={BOARD_MEMBERS} title="Meet Our Leadership Team" />
            </Container>
        </div>
    );
}
