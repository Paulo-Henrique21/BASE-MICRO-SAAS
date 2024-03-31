import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card as CardUi,
} from "../ui/card";

export default function Card() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <CardUi className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Shadcn/ui</CardTitle>
          <CardDescription>
            Estamos aprendendo a utilizar o shadcn/ui
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          aliquam facere mollitia natus voluptatem eius obcaecati expedita
          voluptates. Ut optio distinctio fuga necessitatibus vel soluta
          corporis quod dignissimos ex voluptates.
        </CardContent>
        <CardFooter>Rodape do card</CardFooter>
      </CardUi>
    </div>
  );
}
