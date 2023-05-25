import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';

const StateContext=createContext();

export const StateContextProvider=({children})=>{
    const { contract } = useContract('0x4FC16e0686480f455Da41BCC5e6e2235465E85A2');
    // console.log(contract);
    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');
  
    const address = useAddress();
    const connect = useMetamask();


    const publishCampaign = async (form) => {
      console.log(address);
      console.log(form);
      try {
        const data = await createCampaign({
          args:[
            address, // owner
            form.title, // title
            form.description, // description
            form.target,
            new Date(form.deadline).getTime(), // deadline,
            form.image
          ]
        })
  
        console.log("contract call success", data)
      } catch (error) {
        console.log("contract call failure", error)
      }
    }

    const getCampaigns = async () => {
      const campaigns = await contract.call('getCampaigns');
  
      const parsedCampaings = campaigns.map((campaign, i) => ({
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        target: ethers.utils.formatEther(campaign.target.toString()),
        deadline: campaign.deadline.toNumber(),
        amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
        image: campaign.image,
        pId: i
      }));
  
      return parsedCampaings;
    }

    return (
        <StateContext.Provider
          value={{ 
            address,
            contract,
            connect,
            createCampaign: publishCampaign,
            getCampaigns
          }}
        >
          {children}
        </StateContext.Provider>
      )
}
export const useStateContext = () => useContext(StateContext);