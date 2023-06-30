import ExEffect,{ExEffect2} from "./ExEffect";
import BRouter from "./ExRouter";
import Component1 from "./ExContext";
import MemoCache from "./ExMemo";
import MemoCache2 from "./ExMemo2";
import Context1 from "./ExContext1";
import CallbackEx from "./ExCallback";
import GJson from "./GetJson";

function Switch({target}){
    switch (target) {
        case 'e1' : return <ExEffect />;
        case 'e2' : return <ExEffect2 />;
        case 'r1' : return <BRouter />;
        case 'c1' : return <Component1 />;
        case 'm1' : return <MemoCache />;
        case 'm2' : return <MemoCache2 />;
        case 'c2' : return <Context1 />;
        case 'cb' : return <CallbackEx />;
        case 'j1' : return <GJson />;
        default: break;
    }
}
Switch.defaultProps = {
    target:'j1'
}
export default Switch;