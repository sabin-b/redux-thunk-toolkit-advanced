import { NameInputDialog } from "./nameinput-dialog";
import { Dialog } from "./ui/dialog";

export function CartPopup() {
  return (
    <Dialog defaultOpen open modal={false}>
      <NameInputDialog />
    </Dialog>
  );
}
