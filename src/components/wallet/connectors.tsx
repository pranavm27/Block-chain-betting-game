import { CHAIN_ID} from "@/config/config";
import { InjectedConnector } from '@web3-react/injected-connector'

export const injected = new InjectedConnector({ supportedChainIds: [CHAIN_ID] })

