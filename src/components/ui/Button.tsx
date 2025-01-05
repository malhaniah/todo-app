import { children } from "solid-js";

export default function Button(props: {children: string}) {
  const safeChildren = children(() => props.children);
  return <button class="bg-blue-600 rounded-br-md py-2 px-4 text-white">{safeChildren()}</button>;
}
