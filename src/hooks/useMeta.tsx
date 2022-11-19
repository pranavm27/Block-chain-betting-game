import React, { useState, useEffect, useMemo, useCallback } from "react";
import { injected } from "../components/wallet/connectors";
import { useWeb3React } from "@web3-react/core";
import { AbiItem } from 'web3-utils'

import {
  WORLD_CUP_ABI,
  DECIMAL,
  NUMBER_BASE,
  GOAT_TOKEN_ADDRESS,
  WORLD_CUP_ADDRESS,
  MAX_APPROVAL_AMOUNT,
  MIN_ABI,
} from "../config/config";
var BigNumber = require("big-number");

declare global {
  interface Window {
    ethereum: any
  }
}

import Web3 from "web3";

interface AppContextInterface {
  connect: any;
  disconnect: any;
  isActive: any;
  account: any;
  // shouldDisable: any;
  ticketPrice: any;
  totalPool: any;
  fees: any;
  allTicketForTeam:any;
  makeSignedTransaction: any;
    allTeams: any;
    ticketsForWallet: any;
    teamForWallet: any;
    hasGameEnded: any;
    winningsForWallet: any;
    isSleeping: any;
    functionCollectWinnings: any;
    hasWalletWithdrawn: any;
    hasBet: any;
}

export const MetaMaskContext = React.createContext<AppContextInterface>({} as AppContextInterface);

export const MetaMaskProvider = ({ children }: any) => {
  type MyType = {
    team: any;
    tickets: any;
    win: number;
  };
  const { activate, account, active, deactivate } =
    useWeb3React();

  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [allTeams, setAllTeams] = useState([]);
  const [ticketPrice, setTicketPrice] = useState();
  const [totalPool, setTotalPool] = useState(0);
  const [fees, setFees] = useState(0);
  const [allTicketForTeam, setAllTicketForTeam] = useState<MyType[]>([]);
  const [teamForWallet, setTeamForWallet] = useState(0);
  const [ticketsForWallet, setTicketsForWallet] = useState(0);
  const [winningsForWallet, setWinningsForWallet] = useState(0);
  const [isFeesWithDrawn, setIsFeesWithDrawn] = useState(false);
  const [hasBet, setHasBet] = useState(false);
  const [teamIdForWallet, setTeamIdForWallet] = useState(0);
  const [isSleeping, setIsSleeping] = useState(false);
  const [hasGameEnded, setGameEnded] = useState(false);
  const [hasWalletWithdrawn, setHasWalletWithdrawn] = useState(false);

  // Init Loading
  useEffect(() => {
    initialFunctionCall();
    if (hasBet) {
      functionHasWalletWithdrawn();
      functionHasFeesWithdrawn();
      functionGetTeamIdForWallet();
      functionGetTeamForWallet();
      functionGetWinningsForWallet();
      functionGetTicketsForWallet();
      functionGetAllTicketForTeam();
    }
    connect().then(() => {
      refreshData();
      initialFunctionCall();
    });
  }, [account]);

  const refreshData = () => {
    setInterval(() => {
      functionGetTotalPool();
      functionIsSleeping();
      functionGetAllTicketForTeam();
      functionHasGameEnded();
    }, 1 * 60 * 1000); //every minute
  };

  const handleIsActive = useCallback(() => {
    setIsActive(active);
  }, [active]);

  useEffect(() => {
    handleIsActive();
  }, [handleIsActive]);

  useEffect(() => {
    functionGetAllTicketForTeam();
  }, [allTeams]);

  useEffect(() => {
    if (hasBet) {
      functionHasWalletWithdrawn();
      functionHasFeesWithdrawn();
      functionGetTeamIdForWallet();
      functionGetTeamForWallet();
      functionGetWinningsForWallet();
      functionGetTicketsForWallet();
    }
  }, [hasBet]);

  const initialFunctionCall = () => {
    console.log("inside initial cal");
    setIsLoading(false);
    // functionGetApproval();
    functionIsSleeping();
    functionHasGameEnded();
    functionGetAllTeams();
    functionGetTicketPrice();
    functionGetTotalPool();
    functionGetFees();
    functionGetWinningsForWallet;

    //
    functionHasBet();
    functionIsSleeping();
    functionHasGameEnded();

    // checkAllowance()
  };
  const switchNetWrok = async () => {
    const web3 = new Web3(Web3.givenProvider);

    console.log("in swithc network");
    const data = await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: web3.utils.toHex("80001") }],
    });

    console.log("switch network");
    return data;
  };

  // get approval to send token
  const functionGetApproval = async () => {
    try {
      let tokenAddress = GOAT_TOKEN_ADDRESS;
      // let toAddress = WORLD_CUP_ADDRESS;
      let fromAddress = account;

      const web3 = new Web3(Web3.givenProvider);
      // Get ERC20 Token contract instance
      console.log(MIN_ABI)
      let contract = new web3.eth.Contract(MIN_ABI, tokenAddress);

       // call transfer function
      await contract.methods
        .approve(WORLD_CUP_ADDRESS, (MAX_APPROVAL_AMOUNT))
        .send({ from: fromAddress })
        .on("transactionHash", function (hash: any) {
          console.log(hash);
        });
    } catch (error) {
      console.error(error);
    }
  };

  // function to add token to meta mask
  // const functionAddTokenToMM = async () => {
  //   try {
  //     const { ethereum } = window as any;
  //     await ethereum.request({
  //       method: "wallet_watchAsset",
  //       params: {
  //         type: "ERC20",
  //         options: {
  //           address: GOAT_TOKEN_ADDRESS, // ERC20 token address
  //           symbol: `GOT`,
  //           decimals: DECIMAL,
  //           // image: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  //         },
  //       },
  //     });
  //   } catch (ex) {
  //     // We don't handle that error for now
  //     // Might be a different wallet than Metmask
  //     // or user declined
  //     console.error(ex);
  //   }
  // };

  // function to check balance of token in meta mask
  // const functionGetBalance = async () => {
  //   try {
  //     let toAddress = WORLD_CUP_ADDRESS;
  //     let tokenAddress = GOAT_TOKEN_ADDRESS;
  //     let fromAddress = account;
  //     console.log(fromAddress);

  //     const balanceOfABI = [
  //       {
  //         constant: true,
  //         inputs: [
  //           {
  //             name: "_owner",
  //             type: "address",
  //           },
  //         ],
  //         name: "balanceOf",
  //         outputs: [
  //           {
  //             name: "balance",
  //             type: "uint256",
  //           },
  //         ],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //     ];

  //     const web3 = new Web3(Web3.givenProvider);
  //     let apiMethods = new web3.eth.Contract(balanceOfABI, tokenAddress);

  //     const walletAddress = account;
  //     console.log(walletAddress);
  //     let result = await apiMethods.methods
  //       .balanceOf("0xA361e7306fa443eCB2F035f95B8ebCdDf7B075b7")
  //       .call();

  //     console.log(result);
  //     return result;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // Connect to MetaMask wallet
  const connect = async () => {
    try {
       await switchNetWrok();
       await activate(injected);
       new Web3(Web3.givenProvider);
    } catch (error) {
      console.log("Error on connecting: ", error);
    }
  };

  // Disconnect from Metamask wallet
  const disconnect = async () => {
    try {
      await deactivate();
    } catch (error) {
      console.log("Error on disconnecting: ", error);
    }
  };

  // check has the wallet withdrawn fees
  const functionHasFeesWithdrawn = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider);
      let apiMethods = new web3.eth.Contract(WORLD_CUP_ABI, WORLD_CUP_ADDRESS);

      const data = await apiMethods.methods.isFeesWithdrawn().call();
      setIsFeesWithDrawn(data);
    } catch (error) {
      console.error(error);
    }
  };

  // check wallet has done a bet

  const functionHasBet = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider);
      let apiMethods = new web3.eth.Contract(WORLD_CUP_ABI, WORLD_CUP_ADDRESS);
      const data = await apiMethods.methods
        .hasBet(account)
        .call();
        console.log('hasbet..', data)
      setHasBet(data);
    } catch (error) {
      console.error(error);
    }
  };

  // check has game ended
  const functionHasGameEnded = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider);
      let apiMethods = new web3.eth.Contract(WORLD_CUP_ABI, WORLD_CUP_ADDRESS);
      const data = await apiMethods.methods.hasGameEnded().call();
      setGameEnded(data);
    } catch (error) {
      console.error(error);
    }
  };

  // check if game is still active
  const functionIsSleeping = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider);
       await web3.eth.getAccounts();
      let apiMethods = new web3.eth.Contract(WORLD_CUP_ABI, WORLD_CUP_ADDRESS);
      const data = await apiMethods.methods.isSleeping().call();
      console.log("is sleeing ", data);
      setIsSleeping(data);
    } catch (error) {
      console.error(error);
    }
  };

  // get All teams
  const functionGetAllTeams = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider);
       await web3.eth.getAccounts();
      let apiMethods = new web3.eth.Contract(WORLD_CUP_ABI, WORLD_CUP_ADDRESS);
      const teams = await apiMethods.methods.getAllTeams().call();
      setAllTeams(teams.split(","));
    } catch (error) {
      console.error(error);
    }
  };

  //   get Ticket Price
  const functionGetTicketPrice = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider);
      let apiMethods = new web3.eth.Contract(WORLD_CUP_ABI, WORLD_CUP_ADDRESS);
      const data = await apiMethods.methods.getTicketPrice().call();
      setTicketPrice(data);
    } catch (error) {
      console.error(error);
    }
  };

  // get total pool
  const functionGetTotalPool = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider);
      const apiMethods = new web3.eth.Contract(
        WORLD_CUP_ABI,
        WORLD_CUP_ADDRESS
      );
      let data = await apiMethods.methods.getTotalPool().call();
        console.log('first data ', data);
      // let data1 = BigNumber(data).multiply(BigNumber(10).pow(DECIMAL)).toNumber() ;
      data = (data) / Math.pow(10, DECIMAL);

      console.log('data', data)
      console.log('data1', data)

      setTotalPool(data);
    } catch (error) {
      console.error(error);
    }
  };

  // get fees
  const functionGetFees = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider);
      let apiMethods = new web3.eth.Contract(WORLD_CUP_ABI, WORLD_CUP_ADDRESS);
      const data = await apiMethods.methods.getFees().call();
      setFees(data);
    } catch (error) {
      console.error(error);
    }
  };

  // get teams for wallet
  const functionGetTeamForWallet = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider);
      let apiMethods = new web3.eth.Contract(WORLD_CUP_ABI, WORLD_CUP_ADDRESS);
      const data = await apiMethods.methods
        .getTeamForWallet(account)
        .call();
      setTeamForWallet(data);
    } catch (error) {
      console.error(error);
    }
  };

  // function to get teamId for the wallet
  const functionGetTeamIdForWallet = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider);
      let apiMethods = new web3.eth.Contract(WORLD_CUP_ABI, WORLD_CUP_ADDRESS);
      const data = await apiMethods.methods
        .getTeamIdForWallet(account)
        .call();
      setTeamIdForWallet(data);
    } catch (error) {
      console.error(error);
    }
  };

  // get winnings  for wallet
  const functionGetWinningsForWallet = async () => {
    try {
      // web3.eth.handleRevert = true;
      const web3 = new Web3(Web3.givenProvider);
      let apiMethods = new web3.eth.Contract(WORLD_CUP_ABI, WORLD_CUP_ADDRESS);
      const data = await apiMethods.methods
        .getWinningsForWallet(account)
        .call();
      console.log("winnding ffor wallets success", data);
      setWinningsForWallet(data / Math.pow(10, DECIMAL));
    } catch (error: any) {
      console.log(error);
      console.log("winnding ffor wallets fail");
      setWinningsForWallet(0);
    }
  };

  // get get tickets for wallet
  const functionGetTicketsForWallet = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider);
      let apiMethods = new web3.eth.Contract(WORLD_CUP_ABI, WORLD_CUP_ADDRESS);
      const data = await apiMethods.methods
        .getTicketsForWallet(account)
        .call();
        console.log('get tickkets for walllet ',data)
      setTicketsForWallet(data);
    } catch (error) {
      console.error(error);
    }
  };

  // get all ticket fo a team
  const functionGetAllTicketForTeam = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider);
      let apiMethods = new web3.eth.Contract(WORLD_CUP_ABI, WORLD_CUP_ADDRESS);
      let allTeamsTicketData:any[] =  []  ;
      for (let i = 0; i < allTeams?.length; i++) {
        const data = await apiMethods.methods
          .getAllTicketsForTeam((i))
          .call();
        const json = {
          team: allTeams[i],
          tickets: data,
          win: data > 0 ? (totalPool * ((100 - fees) / 100)) / data : 0,
        };
        allTeamsTicketData.push(json);
      }
      setAllTicketForTeam(allTeamsTicketData);
    } catch (error) {
      console.log(error);
    }
  };

  // function check alowance
  const checkAllowance = async (): Promise<any> => {
    try {
      let tokenAddress = GOAT_TOKEN_ADDRESS;

      const web3 = new Web3(Web3.givenProvider);

      const minAbi = [
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
      ];
      // Get ERC20 Token contract instance
      let contract = new web3.eth.Contract(minAbi as AbiItem[], tokenAddress);

      // call transfer function
      let fromAddress = account;

      const result = await contract.methods.allowance(
        fromAddress,
        WORLD_CUP_ADDRESS
      );
      return await result.call();
    } catch (error) {
      console.log(error);
    }
  };

  // make payment buy ticket.
  const makeSignedTransaction = async (
    team: number,
    tickets: number
  ): Promise<Boolean | undefined> => {
    try {
      const allowance = await checkAllowance();
      
      console.log('....allowance', allowance)
      console.log('....ticket price ', ticketPrice)
      // console.log('. ...total ', (ticketPrice * NUMBER_BASE))

      if (ticketPrice && ( allowance < ( ticketPrice ))) {
        await functionGetApproval();
      }

      let toAddress = WORLD_CUP_ADDRESS;
      let fromAddress = account;

      const web3 = new Web3(Web3.givenProvider);
      // Get ERC20 Token contract instance
      let contract = new web3.eth.Contract(MIN_ABI, toAddress);

      // call transfer function
      contract.methods
        .buyTickets(team, tickets)
        .send({ from: fromAddress })
        .on("transactionHash", function (hash: any) {
          console.log(hash);
          functionHasBet();
          return true;
        });
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  // get winnings  for wallet
  const functionCollectWinnings = async () => {
    try {
      console.log("in functionCollectWinnings");
      let fromAddress = account;
      const web3 = new Web3(Web3.givenProvider);
      let apiMethods = new web3.eth.Contract(WORLD_CUP_ABI, WORLD_CUP_ADDRESS);
      const data = await apiMethods.methods
        .collectWinnings()
        .send({ from: fromAddress });
      setHasWalletWithdrawn(true);
      console.log(data);
      console.log("in end");
    } catch (error) {
      console.log(error);
    }
  };

  // function to check if wallet has withdrawn the amount
  const functionHasWalletWithdrawn = async () => {
    try {
      let fromAddress = account;
      const web3 = new Web3(Web3.givenProvider);
      let apiMethods = new web3.eth.Contract(WORLD_CUP_ABI, WORLD_CUP_ADDRESS);
      const data = await apiMethods.methods
        .hasWalletWithdrawn(fromAddress)
        .call();
      // .call({ from: fromAddress });
      console.log("hass withdrawn ", data);
      setHasWalletWithdrawn(data);
    } catch (error) {
      console.log(error);
    }
  };

  const values = useMemo(
    () => ({
      isActive,
      account,
      isLoading,
      connect,
      disconnect,
      allTeams,
      allTicketForTeam,
      ticketPrice,
      totalPool,
      fees,
      teamForWallet,
      ticketsForWallet,
      winningsForWallet,
      isFeesWithDrawn,
      hasBet,
      makeSignedTransaction,
      isSleeping,
      hasGameEnded,teamIdForWallet,
      hasWalletWithdrawn,
      functionCollectWinnings,
    }),
    [
      isActive,
      isLoading,
      allTeams,
      allTicketForTeam,
      ticketPrice,
      totalPool,
      fees,
      teamForWallet,teamIdForWallet,
      ticketsForWallet,
      winningsForWallet,
      isFeesWithDrawn,
      hasBet,
      makeSignedTransaction,
      isSleeping,
      hasGameEnded,
      hasWalletWithdrawn,
      functionCollectWinnings,
    ]
  );

  return (
    <MetaMaskContext.Provider value={values}>
      {children}
    </MetaMaskContext.Provider>
  );
};

export default function useMetaMask() {
  const context = React.useContext(MetaMaskContext);

  if (context === undefined) {
    throw new Error(
      "useMetaMask hook must be used with a MetaMaskProvider component"
    );
  }

  return context;
}
