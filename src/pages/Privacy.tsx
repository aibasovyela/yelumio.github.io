import { Link } from "react-router-dom";

export const Privacy = () => (
  <main className="min-h-screen bg-background text-foreground section-padding">
    <div className="container max-w-3xl space-y-6">
      <Link to="/" className="text-primary hover:text-foreground transition-colors">← На главную</Link>
      <h1 className="text-3xl md:text-5xl font-bold">Политика конфиденциальности</h1>
      <p className="text-muted-foreground">Настоящая политика описывает порядок обработки персональных данных пользователей сайта Yelumio AI Studio в соответствии с законодательством Республики Казахстан.</p>
      <section className="space-y-3"><h2 className="text-2xl font-bold">1. Какие данные мы собираем</h2><p className="text-muted-foreground">Имя, номер телефона, выбранный тариф, цель обучения и иные данные, которые пользователь добровольно указывает в формах сайта.</p></section>
      <section className="space-y-3"><h2 className="text-2xl font-bold">2. Цели обработки</h2><p className="text-muted-foreground">Обработка заявок, консультации по курсу, оформление участия, обратная связь и улучшение качества услуг.</p></section>
      <section className="space-y-3"><h2 className="text-2xl font-bold">3. Хранение и защита</h2><p className="text-muted-foreground">Мы принимаем разумные организационные и технические меры для защиты персональных данных от неправомерного доступа.</p></section>
      <section className="space-y-3"><h2 className="text-2xl font-bold">4. Передача данных</h2><p className="text-muted-foreground">Данные не передаются третьим лицам, кроме случаев, необходимых для оказания услуг или предусмотренных законом.</p></section>
      <section className="space-y-3"><h2 className="text-2xl font-bold">5. Права пользователя</h2><p className="text-muted-foreground">Пользователь может запросить уточнение, блокирование или удаление своих персональных данных, написав на hello@yelumio.kz.</p></section>
    </div>
  </main>
);
