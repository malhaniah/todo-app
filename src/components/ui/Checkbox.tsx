import { createSignal } from "solid-js";

function Checkbox(props: { name?: string; id?: string }) {
  const [checked, setChecked] = createSignal<boolean>(false);

  const handleChecked = () => setChecked((prev) => !prev);
  return (
    <div
      onclick={handleChecked}
      class="w-5 h-5 border-2 rounded-sm transition-all duration-200 border-gray-300 bg-white cursor-pointer"
    >
      {checked() ? <img src="../../../public/check-svgrepo-com.svg" class="w-full h-full"/> : null}
      <input class="sr-only" type="checkbox" name={props.name} id={props.id} />
    </div>
  );
}

export default Checkbox;
