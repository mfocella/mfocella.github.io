var ipfsAPI = require('ipfs-api');
var Buffer = require('buffer/').Buffer;
var ipfs;
var buffer;
var web3;

var TwoPartyLegalContract;
var compiledcontract;




/////////Solidity Code//////////


//insertcompiledcodehere
var bytecode="0x" + "61016060408190526000610140818152608090815260a08290524260c05260e0829052610100829052610120829052916200003d9082908162000474565b50602082015160018201805491151560ff199283161790556040830151600280840191909155606084015160038401556080840151600484018054911515919093161790915560a090920151600590910155600b553480156200009f57600080fd5b5060405162001af538038062001af5833981810160405260c0811015620000c557600080fd5b8151602083015160408401805192949193820192640100000000811115620000ec57600080fd5b820160208101848111156200010057600080fd5b81516401000000008111828201871017156200011b57600080fd5b505092919060200180516401000000008111156200013857600080fd5b820160208101848111156200014c57600080fd5b81516401000000008111828201871017156200016757600080fd5b505092919060200180516401000000008111156200018457600080fd5b820160208101848111156200019857600080fd5b8151640100000000811182820187101715620001b357600080fd5b505060209182015186519194509250620001d4916000919087019062000474565b506004805460ff19168215151790556040805160a08101825283815281516060810190925260308083526006926020808401929062001ac59083013981526000602080830182905242604084015260609092018790528354600181018086559482529082902083518051600590930290910192620002589284929091019062000474565b50602082810151805162000273926001850192019062000474565b50604082015160028201556060820151600382015560808201518051620002a591600484019160209091019062000474565b50505050856007600060028110620002b957fe5b0180546001600160a01b03199081166001600160a01b0393841617909155600880549091168783161790556040805160a0810182526001606082019081527f58000000000000000000000000000000000000000000000000000000000000006080830152815281516020808201845260008083528184019290925260028385015260075490941681526009845291909120815180519293919262000361928492019062000474565b5060208281015180516200037c926001850192019062000474565b50604082015160028201805460ff191660018360038111156200039b57fe5b0217905550506040805160a0810182526001606082019081527f5800000000000000000000000000000000000000000000000000000000000000608083015281528151602080820184526000808352818401929092526002838501526008546001600160a01b0316825260098152929020815180519294509092620004269284929091019062000474565b50602082810151805162000441926001850192019062000474565b50604082015160028201805460ff191660018360038111156200046057fe5b021790555090505050505050505062000519565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004b757805160ff1916838001178555620004e7565b82800160010185558215620004e7579182015b82811115620004e7578251825591602001919060010190620004ca565b50620004f5929150620004f9565b5090565b6200051691905b80821115620004f5576000815560010162000500565b90565b61159c80620005296000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80636206e8341161005b5780636206e834146103a05780636c2e51ae146103ba578063a3fb12bb146104f8578063a4929c89146106675761007d565b806305784206146100825780632ff99ce0146100c55780633ff91d14146101de575b600080fd5b61008a610712565b6040518082600260200280838360005b838110156100b257818101518382015260200161009a565b5050505090500191505060405180910390f35b6100eb600480360360208110156100db57600080fd5b50356001600160a01b03166107bf565b60405180806020018060200184600381111561010357fe5b60ff168152602001838103835286818151815260200191508051906020019080838360005b83811015610140578181015183820152602001610128565b50505050905090810190601f16801561016d5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b838110156101a0578181015183820152602001610188565b50505050905090810190601f1680156101cd5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b61038c600480360360608110156101f457600080fd5b810190602081018135600160201b81111561020e57600080fd5b82018360208201111561022057600080fd5b803590602001918460018302840111600160201b8311171561024157600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561029357600080fd5b8201836020820111156102a557600080fd5b803590602001918460018302840111600160201b831117156102c657600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561031857600080fd5b82018360208201111561032a57600080fd5b803590602001918460018302840111600160201b8311171561034b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610981945050505050565b604080519115158252519081900360200190f35b6103a8610b05565b60408051918252519081900360200190f35b61038c600480360360808110156103d057600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156103fa57600080fd5b82018360208201111561040c57600080fd5b803590602001918460018302840111600160201b8311171561042d57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561047f57600080fd5b82018360208201111561049157600080fd5b803590602001918460018302840111600160201b831117156104b257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050903560ff169150610b0b9050565b6105156004803603602081101561050e57600080fd5b5035610ec0565b60405180806020018060200186815260200185815260200180602001848103845289818151815260200191508051906020019080838360005b8381101561056657818101518382015260200161054e565b50505050905090810190601f1680156105935780820380516001836020036101000a031916815260200191505b5084810383528851815288516020918201918a019080838360005b838110156105c65781810151838201526020016105ae565b50505050905090810190601f1680156105f35780820380516001836020036101000a031916815260200191505b50848103825285518152855160209182019187019080838360005b8381101561062657818101518382015260200161060e565b50505050905090810190601f1680156106535780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b61066f611197565b60405180806020018715151515815260200186815260200185151515158152602001848152602001838152602001828103825288818151815260200191508051906020019080838360005b838110156106d25781810151838201526020016106ba565b50505050905090810190601f1680156106ff5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b61071a61134b565b60045460ff166107825733600090815260096020526040902054600260001961010060018416150201909116046107825760405162461bcd60e51b815260040180806020018281038252602f8152602001806114fc602f913960400191505060405180910390fd5b60408051808201918290529060079060029082845b81546001600160a01b0316815260019091019060200180831161079757505050505090505b90565b600454606090819060009060ff1661082f57336000908152600960205260409020546002600019610100600184161502019091160461082f5760405162461bcd60e51b815260040180806020018281038252602f8152602001806114fc602f913960400191505060405180910390fd5b6001600160a01b03841660009081526009602090815260409182902060028082015482548551610100600180841615919091026000190190921693909304601f810186900486028401860190965285835292949285019360ff9091169285918301828280156108df5780601f106108b4576101008083540402835291602001916108df565b820191906000526020600020905b8154815290600101906020018083116108c257829003601f168201915b5050855460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529598508794509250840190508282801561096d5780601f106109425761010080835404028352916020019161096d565b820191906000526020600020905b81548152906001019060200180831161095057829003601f168201915b505050505091509250925092509193909250565b33600090815260096020526040812054600260001961010060018416150201909116046109df5760405162461bcd60e51b815260040180806020018281038252602f8152602001806114fc602f913960400191505060405180910390fd5b6109e960026112d2565b1515600114610a295760405162461bcd60e51b815260040180806020018281038252603e8152602001806114be603e913960400191505060405180910390fd5b6005805460019081018083556040805160a0810182528781526020808201889052918101839052426060820152608081018990526006805494850180825560009190915281518051949691959294929091027ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0192610aad92849290910190611369565b506020828101518051610ac69260018501920190611369565b50604082015160028201556060820151600382015560808201518051610af6916004840191602090910190611369565b50600198975050505050505050565b600b5481565b3360009081526009602052604081205460026000196101006001841615020190911604610b695760405162461bcd60e51b815260040180806020018281038252602f8152602001806114fc602f913960400191505060405180910390fd5b8351610bbc576040805162461bcd60e51b815260206004820152601a60248201527f546865206e616d65206d757374206e6f7420626520656d707479000000000000604482015290519081900360640190fd5b60015460ff1615610bfe5760405162461bcd60e51b815260040180806020018281038252603d81526020018061152b603d913960400191505060405180910390fd5b6001600160a01b03851660009081526009602052604090205460026000196101006001841615020190911604610d4657336000908152600960205260408082206001600160a01b038816835291208154610c6e9082908490600260001961010060018416150201909116046113e7565b5060018201816001019080546001816001161561010002031660029004610c969291906113e7565b50600282810154908201805460ff9092169160ff19166001836003811115610cba57fe5b0217905550506007546001600160a01b03163314159050610cf557600780546001600160a01b0319166001600160a01b038716179055610d11565b600880546001600160a01b0319166001600160a01b0387161790555b33600090815260096020526040812090610d2b828261145c565b610d3960018301600061145c565b50600201805460ff191690555b6001600160a01b03851660009081526009602090815260409091208551610d6f92870190611369565b506001600160a01b03851660009081526009602090815260409091208451610d9f92600190920191860190611369565b506001600160a01b0385166000908152600960205260409020600201805483919060ff19166001836003811115610dd257fe5b0217905550610de160006112d2565b151560011415610dfc576001805460ff191681179055426003555b336001600160a01b03167f408a060e18f320a1a98761ae3e337da151054e66eaae6dac48faa450f2d767ea85846040518080602001836003811115610e3d57fe5b60ff168152602001828103825284818151815260200191508051906020019080838360005b83811015610e7a578181015183820152602001610e62565b50505050905090810190601f168015610ea75780820380516001836020036101000a031916815260200191505b50935050505060405180910390a2506001949350505050565b60045460609081906000908190839060ff16610f34573360009081526009602052604090205460026000196101006001841615020190911604610f345760405162461bcd60e51b815260040180806020018281038252602f8152602001806114fc602f913960400191505060405180910390fd5b60068681548110610f4157fe5b906000526020600020906005020160000160068781548110610f5f57fe5b906000526020600020906005020160010160068881548110610f7d57fe5b90600052602060002090600502016002015460068981548110610f9c57fe5b90600052602060002090600502016003015460068a81548110610fbb57fe5b9060005260206000209060050201600401848054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110615780601f1061103657610100808354040283529160200191611061565b820191906000526020600020905b81548152906001019060200180831161104457829003601f168201915b5050875460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152959a50899450925084019050828280156110ef5780601f106110c4576101008083540402835291602001916110ef565b820191906000526020600020905b8154815290600101906020018083116110d257829003601f168201915b5050845460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529599508694509250840190508282801561117d5780601f106111525761010080835404028352916020019161117d565b820191906000526020600020905b81548152906001019060200180831161116057829003601f168201915b505050505090509450945094509450945091939590929450565b600454606090600090819081908190819060ff1661120d57336000908152600960205260409020546002600019610100600184161502019091160461120d5760405162461bcd60e51b815260040180806020018281038252602f8152602001806114fc602f913960400191505060405180910390fd5b600180546002805460045460035460055460008054604080516020601f6000199c851615610100029c909c0190931698909804998a018290048202880182019052888752909760ff97881697959694909516949293919288918301828280156112b75780601f1061128c576101008083540402835291602001916112b7565b820191906000526020600020905b81548152906001019060200180831161129a57829003601f168201915b50505050509550955095509550955095509550909192939495565b6000805b6002811015611340578260038111156112eb57fe5b60096000600784600281106112fc57fe5b01546001600160a01b0316815260208101919091526040016000206002015460ff16600381111561132957fe5b14611338576000915050611346565b6001016112d6565b50600190505b919050565b60405180604001604052806002906020820280388339509192915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106113aa57805160ff19168380011785556113d7565b828001600101855582156113d7579182015b828111156113d75782518255916020019190600101906113bc565b506113e39291506114a3565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061142057805485556113d7565b828001600101855582156113d757600052602060002091601f016020900482015b828111156113d7578254825591600101919060010190611441565b50805460018160011615610100020316600290046000825580601f1061148257506114a0565b601f0160209004906000526020600020908101906114a091906114a3565b50565b6107bc91905b808211156113e357600081556001016114a956fe446f63756d656e74206973204c6f636b65642e2020426f7468205061727469657320737461747573657320617265206e6f74206e65676f74696174696e67596f7520617265206e6f74206f6e65206f66207468652070617274696573206f6e207468697320636f6e747261637454686520636f6e747261637420686173206265656e207369676e6564206e6f2066757274686572206d6f64696669636174696f6e7320616c6c6f776564a265627a7a72305820881a9ab999e75e79fa0b15d04801bc9a1795806be20541f6ad8327602be257d664736f6c634300050a0032496e697469616c20446f63756d656e742055706c6f61646564207769746820436f6e7472616374204372656174696f6e"


//insertabihere
var abiinterface=[{"constant":true,"inputs":[],"name":"partiesAddresses_pub","outputs":[{"name":"","type":"address[2]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"i","type":"address"}],"name":"parties_pub","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"string"},{"name":"filename","type":"string"},{"name":"comment","type":"string"}],"name":"updateDocument","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"leth_ContractVersion","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"adr","type":"address"},{"name":"name","type":"string"},{"name":"email","type":"string"},{"name":"p_status","type":"uint8"}],"name":"updateParty","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"i","type":"uint256"}],"name":"contractVersions_pub","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mainContract_pub","outputs":[{"name":"","type":"string"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"party1","type":"address"},{"name":"party2","type":"address"},{"name":"name","type":"string"},{"name":"filehash","type":"string"},{"name":"filename","type":"string"},{"name":"worldreadable","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"party","type":"address"},{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"updatedstatus","type":"uint8"}],"name":"updatePartyDetails","type":"event"}]


///////////////END/////////////





window.Dapp = {

    CleanNotifications: function(delaytime=5000) {
        setTimeout(function () {
            document.getElementById("update_notifications").innerHTML = "";
            document.getElementById("upload_notifications").innerHTML = "";
            document.getElementById("mainContractDeploymentText").innerHTML = "";
        }, delaytime);
    },

    CleanViews: function() {
        items = document.getElementsByClassName("viewcleanup");
        for (var i=0; i < items.length; i++) {
            items[i].innerHTML = "";
        }
    },

    VerifyIPFS: function() {
        ipfs.id(function(error, result) {
            if (error) {
                document.getElementById("update_notifications").innerHTML = "<p>There was an error Connecting to IPFS.</p>";
                console.log("There was an error Connecting to IPFS: " + error);
            }
            else
            {
                console.log("Connected to IPFS node: ", result.id, result.agentVersion, result.protocolVersion);
            }
        })
        Dapp.CleanNotifications();
    },

    AddFileIPFS: function(file) {
       return new Promise(resolve => {
       var reader = new FileReader();
       reader.onload = function(e) {
           var buffer = Buffer.from(reader.result);
               ipfs.files.add(buffer, function(error, files){
                   if (error){
                       console.log("There was an error uploading the file which is: " + error);
                       document.getElementById("upload_notifications").innerHTML = "<p>There was an error when uploading the document to IPFS.</p>";
                   }
                   else {
                       console.log("Added file to IPFS.  Resulting with hash: " + files[0].hash + " and size: " + files[0].size.toString() + " and path: " + files[0].path);
                       resolve(files[0].hash);
                   }
               })
           }
       reader.readAsArrayBuffer(file);
       })
    },

    DeployMainContract: async function() {
        var address1 = document.getElementById("initialize_party1_address").value;
        var address2 = document.getElementById("initialize_party2_address").value;
        var name = document.getElementById("initialize_contract_name").value;
        var private_setting = document.getElementById("private_switch").checked;
        var files = document.getElementById("initialize_document").files;
        var filename = document.getElementById("initialize_document").files[0].name;
        var filehash = await Dapp.AddFileIPFS(files[0]);
        var TwoPartyLegalContract = new web3.eth.Contract(abiinterface);
        console.log("IPFS filehash is " + filehash);
        TwoPartyLegalContract.new( address1, address2, name, filehash, filename, private_setting,
            { data: bytecode, from: web3.eth.accounts[0] }, function(e, contract){
                if(e) { console.log("There was an error deploying the contract: " + e);
                } else {
                    console.log("Deploying TwoPartyLegalContract");
                    if(!contract.address) {
                        console.log("Check Metamask for transaction details and status");
                    } else {
                        alert("The contract has been created.  Please save/use contract Address: " + contract.address);
                        console.log("The Contract has been created.  Address: " + contract.address);
                    }
                }
        })
        Dapp.CleanNotifications(15000);
    },

    ConvertStatus: function(status) {
        statuses = ["Signed", "Review", "Negotiating", "Rejected"];
        return statuses[status];
    },

    GetMainContractData: function(myLegalContract) {
        return new Promise(resolve => {
            myLegalContract.mainContract_pub.call( function(error,response) {
                if (error) {
                    console.log("There was an error getting the main contract details.  Error is: \n " + error);
                }
                else {
                    console.log("The main contract details response is " + response);
                    var responsearray = response.toString().split(",");
                    var main_contract_details = {name: responsearray[0], signed: responsearray[1], time_created: "", time_signed: "", world_readable: responsearray[3], current_doc_version: responsearray[5]};
                    main_contract_details.time_created = new Date(responsearray[2] * 1000);
                    if (responsearray[4] == "0") {
                        main_contract_details.time_signed = "";
                    } else {
                        main_contract_details.time_signed = new Date(responsearray[4] * 1000);
                    }
                    resolve(main_contract_details);
                }
            })
        })
    },

    GetPartiesAddresses: function(myLegalContract) {
        return new Promise(resolve=> {
            var addresses = [];
            myLegalContract.partiesAddresses_pub.call( function(error,response){
                if (error) {
                    console.log("There was an error getting parties addresses.  Error is: \n" + error);
                }
                else {
                    console.log("The parties addresses are " + response);
                    responsearray = response.toString().split(",");
                    resolve(responsearray);
                }
            })
        })
    },

    GetPartyDetails: function(myLegalContract,address) {
        return new Promise(resolve=> {
            myLegalContract.parties_pub.call([address], function(error,response) {
                if (error) {
                    console.log("There was an error getting party details.  Error is: \n" + error);
                }
                else {
                    console.log("The party details response is " + response);
                    responsearray = response.toString().split(",");
                    party_details = {name: responsearray[0], email: responsearray[1], status: responsearray[2], address: address};
                    resolve(party_details);
                }
            })
        })
    },

    GetBothPartyDetails: async function(myLegalContract,addresses){
        var bothpartydetails = [];
        for(i=0;i<2;i++){
            var partydetails = await Dapp.GetPartyDetails(myLegalContract,addresses[i]);
            bothpartydetails[i] = partydetails;
        }
        return bothpartydetails;
    },

    GetDocumentVersion: function(myLegalContract,currentversion) {
        return new Promise(resolve=>{
        myLegalContract.contractVersions_pub.call( [currentversion], function(error,response){
            if (error) {
                    console.log("There was an error getting the contract file details.  Error is \n" + error);
                }
                else {
                    console.log("The contract file details response is " + response);
                    var responsearray = response.toString().split(",");
                    var file_details = {version_number: responsearray[2], last_updated: "", filehash: responsearray[4], name: responsearray[0], comment: responsearray[1]};
                    file_details.last_updated = new Date(responsearray[3] * 1000);
                    resolve(file_details);
                }
            })

        })
    },

    CreateContractInstance: function() {
        var LegalContract = new web3.eth.Contract(abiinterface);
        var mainContractAddress = document.getElementById("contract_address").value;
        var myLegalContract = LegalContract.at(mainContractAddress);
        return myLegalContract;
    },

    ClickViewTab: async function() {
        Dapp.CleanViews();
        LegalContract = Dapp.CreateContractInstance();
        var maincontractdetails = await Dapp.GetMainContractData(LegalContract);
        var partiesaddresses = await Dapp.GetPartiesAddresses(LegalContract);
        var partydets = await Dapp.GetPartyDetails(LegalContract,partiesaddresses[0]);
        var partiesdetails = await Dapp.GetBothPartyDetails(LegalContract,partiesaddresses);
        document.getElementById("main_contract_details").innerHTML = "<p>Time Contract Created: " + maincontractdetails.time_created + "</p><p>Time Contract Signed: " + maincontractdetails.time_signed + "</p><p>Signed: <span id=\"signed_status\">" + maincontractdetails.signed + "</span></p><p>Outsiders Can View: " + maincontractdetails.world_readable + "</p><p>Associated Document Version: " + maincontractdetails.current_doc_version + "</p>"; document.getElementById("contract_name").innerHTML="<p>" + maincontractdetails.name + "</p>"; $( "#signed_status:contains('false')" ).css('color', 'red'); $( "#signed_status:contains('true')" ).css('color', 'green');
        for(i=0;i<2;i++){
            partiesdetails[i].status = Dapp.ConvertStatus(partiesdetails[i].status);
            if(partiesdetails[i].address == web3.eth.accounts[0]) {
                document.getElementById("party1_view_column").innerHTML = "<p>My Address: " + partiesdetails[i].address + "</p><p>Name: " + partiesdetails[i].name + "</p><p>Email: " + partiesdetails[i].email + "</p><p>Status: " + partiesdetails[i].status + "</p>";
            } else {
                document.getElementById("party2_view_column").innerHTML = "<p>Their Address: " + partiesdetails[i].address + "</p><p>Name: " + partiesdetails[i].name + "</p><p>Email: " + partiesdetails[i].email + "</p><p>Status: " + partiesdetails[i].status + "</p>";
            }
        }
        var current_version = maincontractdetails.current_doc_version;
        for(i=current_version;i>=0;i--){
            var versiondetails = await Dapp.GetDocumentVersion(LegalContract,i);
            if(i == current_version) {
                document.getElementById("document_view_details").innerHTML = "<p>Document Name: " + versiondetails.name + "</p><p>Comment: " + versiondetails.comment + "</p><p>Document Hash: " + versiondetails.filehash + "</p><p>Document Last Updated: " + versiondetails.last_updated + "</p><p>Document Version: " + versiondetails.version_number + "</p><p></p> <a href=\"https://ipfs.infura.io:5001/api/v0/cat?arg=" + versiondetails.filehash + "\" download><button title=\"To Download file, right click save link as and use the complete Document Name including file extension\">Download File</button></a><span id=download_hint>  Hover over button for instructions</span>";
            } else {
                $("#previous_contracts").append("<p>Document Name: " + versiondetails.name + "</p><p>Comment: " + versiondetails.comment + "</p><p>Document Hash: " + versiondetails.filehash + "</p><p>Document Last Updated: " + versiondetails.last_updated + "</p><p>Document Version: " + versiondetails.version_number + "</p><p></p> <a href=\"https://ipfs.infura.io:5001/api/v0/cat?arg=" + versiondetails.filehash + "\" download><button>Download File</button></a><p></p><p></p>");
            }
        }
        Dapp.CleanNotifications();
    },

    ClickUploadTab: async function() {
        Dapp.CleanViews();
        var LegalContract = Dapp.CreateContractInstance();
        var partiesaddresses = await Dapp.GetPartiesAddresses(LegalContract);
        var partiesdetails = await Dapp.GetBothPartyDetails(LegalContract,partiesaddresses);
         for(i=0;i<2;i++){
            partiesdetails[i].status = Dapp.ConvertStatus(partiesdetails[i].status);
            if(partiesdetails[i].address == web3.eth.accounts[0]) {
                document.getElementById("document_upload_status_p1").innerHTML = "<p>Our Status: " + partiesdetails[i].status + " </p>";
            } else {
                document.getElementById("document_upload_status_p2").innerHTML = "<p>Their Status: " + partiesdetails[i].status + " </p>";
            }
        }
        if (document.getElementById("document_upload_status_p1").innerHTML.includes("Negotiating") == false || document.getElementById("document_upload_status_p2").innerHTML.includes("Negotiating") == false) {
            document.getElementById("document_upload_status").innerHTML = "<p>Document Uploading is not allowed because both Parties must be Negotiating.</p>";
        }
        Dapp.CleanNotifications();
    },

    UploadContractFile: async function() {
        if (document.getElementById("document_upload_status_p1").innerHTML.includes("Negotiating") == false || document.getElementById("document_upload_status_p2").innerHTML.includes("Negotiating") == false) {
            console.log("Cannot upload file because both statuses are not negotiating.");
            return alert("Both statuses must be Negotiating to upload a contract document.");
        }
        var LegalContract = Dapp.CreateContractInstance();
        var files = document.getElementById("updated_document_upload").files;
        var filehash = await Dapp.AddFileIPFS(files[0]);
        var filename = files[0].name;
        var comment = document.getElementById("file_comment").value;
        LegalContract.updateDocument(filehash, filename, comment, { from: web3.eth.accounts[0] }, function(error, response) {
            console.log("Uploading file hash: " + filehash);
            if (error) {
                document.getElementById("upload_notifications").innerHTML = "<p>There was an error when uploading the document.</p>";
                console.log("There was an error uploading the file hash to Ethereum.  The error is: " + error);
            }
            else {
                if(!response.address) {
                    console.log("Ethereum Transaction Created.  View details on Metamask.");
                } else {
                    console.log("The file hash has been successfully added to your contract.");
                }
            }
        })
        Dapp.CleanNotifications();
    },

    ClickUpdateTab: async function() {
        Dapp.CleanViews();
        var LegalContract = Dapp.CreateContractInstance();
        var partiesaddresses = await Dapp.GetPartiesAddresses(LegalContract);
        var partiesdetails = await Dapp.GetBothPartyDetails(LegalContract,partiesaddresses);
        for(i=0;i<2;i++){
            if(partiesdetails[i].address == web3.eth.accounts[0]) {
                console.log("Grabbed current party details."); document.getElementById("name_update").value = partiesdetails[i].name; document.getElementById("email_update").value = partiesdetails[i].email; document.getElementById("address_update").value = partiesdetails[i].address; document.getElementById("status_update").value = partiesdetails[i].status;
            }
        }
    Dapp.CleanNotifications();
    },


    UpdatePartyDetails: function() {
        var LegalContract = Dapp.CreateContractInstance();
        var name = document.getElementById("name_update").value;
        var email = document.getElementById("email_update").value;
        var address = document.getElementById("address_update").value;
        var status = document.getElementById("status_update").value;

        LegalContract.updateParty(address, name, email, status, { from: web3.eth.accounts[0] },  function(error, response) {
            console.log("Updating party with address: " + address + " name: " + name + " email: " + email + " status: " + status );
            if (error) {
                document.getElementById("upload_notifications").innerHTML = "<p>There was an error when updating Party Details.</p>";
                console.log("There was an error updating the party details in the contract.  The error is: " + error);
            }
            else {
                if(!response.address) {
                    console.log("View the status of your transaction in Metamask.");
                } else {
                    console.log("The party details have been updated in the contract.");
                }
            }
        })
        Dapp.CleanNotifications();
    }
}

window.addEventListener("load", function() {
    ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'});
    Dapp.VerifyIPFS();
    Dapp.CleanNotifications();
    web3 = new Web3(window.web3.currentProvider);
});
