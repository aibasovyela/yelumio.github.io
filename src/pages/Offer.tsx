import { Link } from "react-router-dom";

export const Offer = () => (
  <main className="min-h-screen bg-background text-foreground section-padding">
    <div className="container max-w-3xl space-y-6">
      <Link to="/" className="text-primary hover:text-foreground transition-colors">← На главную</Link>
      <h1 className="text-3xl md:text-5xl font-bold">Публичная оферта</h1>
      <p className="text-muted-foreground">Настоящая оферта определяет условия оказания образовательных и консультационных услуг по курсу Yelumio AI Studio.</p>
      <section className="space-y-3"><h2 className="text-2xl font-bold">1. Предмет</h2><p className="text-muted-foreground">Yelumio предоставляет доступ к материалам курса, практическим заданиям, обратной связи и дополнительным услугам согласно выбранному тарифу.</p></section>
      <section className="space-y-3"><h2 className="text-2xl font-bold">2. Порядок участия</h2><p className="text-muted-foreground">Участие оформляется после подачи заявки, подтверждения тарифа и оплаты. Формат, сроки и объём услуг зависят от выбранного тарифа.</p></section>
      <section className="space-y-3"><h2 className="text-2xl font-bold">3. Оплата и возврат</h2><p className="text-muted-foreground">Если в течение 7 дней после старта пользователь понимает, что курс не подходит, Yelumio возвращает 100% оплаты по письменному запросу.</p></section>
      <section className="space-y-3"><h2 className="text-2xl font-bold">4. Интеллектуальная собственность</h2><p className="text-muted-foreground">Материалы курса предназначены только для личного использования участника и не могут распространяться без письменного согласия Yelumio.</p></section>
      <section className="space-y-3"><h2 className="text-2xl font-bold">5. Контакты</h2><p className="text-muted-foreground">По вопросам оферты: hello@yelumio.kz.</p></section>
    </div>
  </main>
);
