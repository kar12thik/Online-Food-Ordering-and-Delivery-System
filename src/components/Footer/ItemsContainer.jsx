import Item from "./Item";
import { COMPANY, SUPPORT, LEGAL, DELIVERY } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="CONTACT" />
      <Item Links={LEGAL} title="LEGAL" />
      <Item Links={DELIVERY} title="WE DELIVER TO" />
    </div>
  );
};

export default ItemsContainer;