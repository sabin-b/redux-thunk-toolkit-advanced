import { NameInputDialog } from "./nameinput-dialog";
import { Dialog } from "./ui/dialog";

export function CartPopup() {
  return (
    <div className="min-h-screen">
      <Dialog defaultOpen open modal={false}>
        <NameInputDialog />
      </Dialog>
    </div>
  );
}
