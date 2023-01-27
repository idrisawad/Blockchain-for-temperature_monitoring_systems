# Blockchain-for-temperature_monitoring_systems

This script is a basic implementation of a blockchain using JavaScript. It uses the SHA256 algorithm to hash the blocks and includes a temperature measurement feature with an alarm system. The script utilizes the axios library to make HTTP requests and fetch temperature data from a Provider's API every 3 hours.


#### Prerequisites: ####

 - Node.js: This script requires Node.js to be installed on your system in order to run. You can download it from the official website (https://nodejs.org/en/)
 - axios: This script uses the axios library for making HTTP requests. You can install it by running the command "npm install axios" in the command prompt/terminal.
 - crypto-js: This script uses the crypto-js library for implementing the SHA256 algorithm. You can install it by running the command "npm install crypto-js" in the command prompt/terminal.
 - Access to Provider's API: This script fetches temperature data from a Provider's API, so you need to have access to a Provider's API that returns temperature data in the appropriate format.

#### Hardware Requirements: ####

The minimum hardware requirements to run this script depend on the size and complexity of the blockchain, as well as the number of requests made to the Provider's API. However, a general guideline for the minimum hardware requirements is as follows:

**Processor:** A modern processor with a minimum of 2 cores is recommended to handle the computations required for hashing and encrypting the blocks.

**Memory:** A minimum of 4GB of RAM is recommended to ensure smooth execution of the script.

**Storage:** The storage requirements depend on the size of the blockchain. A minimum of 100GB of storage is recommended to allow for growth of the blockchain over time.

**Network:v A stable and fast internet connection is necessary for making requests to the Provider's API and for synchronizing the data between different nodes.

#### Please note that these are general guidelines and that the actual hardware requirements may vary depending on the specific implementation of the script. ####

It's important to note that depending on the number of requests you want to make to the Provider's API and the size of your blockchain, the performance of your script can be affected, in this case, you may consider using a cloud-based solution such as AWS or GCP.

### User Manual: ###

 1. Install Node.js on your system if it is not already installed.

 2. Install the required libraries by running the following commands in the command prompt/terminal:
 - npm install axios
 - npm install crypto-js

 3. Make sure you have access to a Provider's API that returns temperature data in the appropriate format.

 4. Save the script to a .js file on your system.

 5. Open the command prompt/terminal and navigate to the directory where you have saved the script.

 6. Run the script using the command "node scriptname.js", where "scriptname.js" is the name of the script file.

 7. The script will start fetching temperature data from the Provider's API every 3 hours and adding a new block to the blockchain with that data. It will also check if the temperature exceeds the set limit and trigger an alarm if necessary.

 8. You can check the temperature and alarm status by running the command "tempCoin.chain" to see the blockchain and check the temperature field of each block.

###### Please note that this is a basic script and is intended for educational and demonstration purposes only. ######
###### It  is not suitable for production use and should not be used in any critical applications. ######

### Conclusion: ###

The use of blockchain technology in measurement technology can offer several opportunities for improving the accuracy, security, and traceability of data.

 1. **Increased accuracy:** By using a decentralized and distributed system, data can be recorded and stored in multiple locations, reducing the chances of errors and increasing accuracy.

 2. **Improved security:** The use of cryptography and hashing algorithms in blockchain technology can provide a high level of security for the data, making it tamper-proof and resistant to cyber attacks.

 3. **Traceability:** The use of blockchain technology can provide a tamper-proof record of all measurements, allowing for easy traceability and auditing of data.

 4. **Real-time monitoring:** With the integration of blockchain technology, it will be possible to monitor and record measurements in real-time, providing real-time insights and enabling quick response to any changes or anomalies.

 5. **Interoperability:** By using blockchain technology, it is possible to create an open and decentralized system that allows different measurement devices and technologies to communicate and share data with each other.

 6. **Cost-effective:** Blockchain technology can help to reduce the costs associated with data storage, transfer and management, by removing the need for a centralized intermediary or third-party to verify transactions.

 7. **Automation:** Smart contract functionality in the blockchain technology can enable the automation of certain processes, such as triggering an alarm when a certain threshold is exceeded.

###### Overall, the use of blockchain technology in measurement technology has the potential to improve the accuracy, security, traceability, and automation of data collection and management, making it an attractive opportunity for further research and development in this field. ######

#### Legal Disclaimer: #### 
The information provided on this GitHub page (the "Page") is for general informational purposes only. The Page is not intended to provide legal advice or create an attorney-client relationship. You should not act or rely on any information on the Page without seeking the advice of a qualified attorney. The developer(s) of this Page do not warrant or guarantee the accuracy, completeness, or usefulness of any information contained on the Page and will not be liable for any errors or omissions in the information provided or for any actions taken in reliance on the information provided.

#### Policy: #### 
All code and other materials provided on this Page are the property of the developer(s) and are protected by copyright and other intellectual property laws. You may not use, reproduce, distribute, or create derivative works from the code or materials on the Page without the express written consent of the developer(s). If you would like to use any of the code or materials provided on this Page for any purpose, please contact the developer(s) for permission.

The developer(s) reserve the right to make changes to the Page and to the code and materials provided on the Page at any time and without notice. The developer(s) also reserve the right to terminate access to the Page or to any code or materials provided on the Page at any time and without notice.

#### Copyright Notice: #### 
Copyright (c) 2023 Idris Awad. All rights reserved. Any code or other materials provided on this Page are the property of the developer(s) and are protected by copyright and other intellectual property laws. Unauthorized use, reproduction, distribution, or creation of derivative works is prohibited.

Please note that using, reproducing or distributing the code or materials provided on this Page without proper attribution and without obtaining express permission from the developer(s) may result in copyright infringement and legal action being taken against you.

By accessing and using this Page, you acknowledge and agree to the terms of this legal disclaimer, policy and copyright notice.
