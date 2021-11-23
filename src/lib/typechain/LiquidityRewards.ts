/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface LiquidityRewardsInterface extends ethers.utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "TREASURY_ROLE()": FunctionFragment;
    "UPDATER_ROLE()": FunctionFragment;
    "claimRewards(uint256)": FunctionFragment;
    "depositEndTime()": FunctionFragment;
    "emergencyClaim(uint256)": FunctionFragment;
    "falseRewardClaimed(address)": FunctionFragment;
    "falseRewardUnclaimed(address,uint256)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "initialize(address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,address,address)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "reservoir()": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "rewardClaimed(address)": FunctionFragment;
    "rewardRateCoeff()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "rewardUnclaimed(address,uint256)": FunctionFragment;
    "rewardsVestingDuration()": FunctionFragment;
    "secondsInAWeek()": FunctionFragment;
    "setWeekInfo(uint256,uint256,uint256,uint256)": FunctionFragment;
    "setWeekState(uint256,uint256)": FunctionFragment;
    "stake(uint256,uint256)": FunctionFragment;
    "stakeToken()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "userStake(address,uint256)": FunctionFragment;
    "userStaked(address)": FunctionFragment;
    "userWithdraw(address,uint256)": FunctionFragment;
    "viewTotalRewards(uint256)": FunctionFragment;
    "viewVestedRewards(uint256)": FunctionFragment;
    "weekInfo(uint256)": FunctionFragment;
    "withdraw(uint256,uint256)": FunctionFragment;
    "withdrawUnlockTime()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TREASURY_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UPDATER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositEndTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyClaim",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "falseRewardClaimed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "falseRewardUnclaimed",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "reservoir", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardClaimed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardRateCoeff",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardUnclaimed",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsVestingDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "secondsInAWeek",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setWeekInfo",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setWeekState",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userStake",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "userStaked", values: [string]): string;
  encodeFunctionData(
    functionFragment: "userWithdraw",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "viewTotalRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "viewVestedRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "weekInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawUnlockTime",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TREASURY_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UPDATER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositEndTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "falseRewardClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "falseRewardUnclaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reservoir", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardRateCoeff",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardUnclaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsVestingDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "secondsInAWeek",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWeekInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWeekState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userStake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userStaked", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewTotalRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewVestedRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weekInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawUnlockTime",
    data: BytesLike
  ): Result;

  events: {
    "Claimed(address,uint256)": EventFragment;
    "EmergencyClaimed(address,uint256,uint256)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "Staked(address,uint256,uint256)": EventFragment;
    "Withdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export type ClaimedEvent = TypedEvent<
  [string, BigNumber],
  { claimer: string; amount: BigNumber }
>;

export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;

export type EmergencyClaimedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { claimer: string; rewardAmount: BigNumber; penaltyAmount: BigNumber }
>;

export type EmergencyClaimedEventFilter =
  TypedEventFilter<EmergencyClaimedEvent>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  { role: string; previousAdminRole: string; newAdminRole: string }
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export type StakedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { staker: string; weekNumber: BigNumber; amount: BigNumber }
>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export type WithdrawnEvent = TypedEvent<
  [string, BigNumber],
  { staker: string; amount: BigNumber }
>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface LiquidityRewards extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LiquidityRewardsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    TREASURY_ROLE(overrides?: CallOverrides): Promise<[string]>;

    UPDATER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    claimRewards(
      _weekNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositEndTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    emergencyClaim(
      _weekNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    falseRewardClaimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    falseRewardUnclaimed(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        unlockTime: BigNumber;
        recordTime: BigNumber;
      }
    >;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      _reservoir: string,
      _rewardToken: string,
      _stakeToken: string,
      _startWeekNumber: BigNumberish,
      _startWeekStartTime: BigNumberish,
      _startWeekEndTime: BigNumberish,
      _amountOfWeeksToSet: BigNumberish,
      _rewardsVestingDuration: BigNumberish,
      _depositEndTime: BigNumberish,
      _treasury: string,
      _updater: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    reservoir(overrides?: CallOverrides): Promise<[string]>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardClaimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardRateCoeff(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    rewardUnclaimed(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        unlockTime: BigNumber;
        recordTime: BigNumber;
      }
    >;

    rewardsVestingDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    secondsInAWeek(overrides?: CallOverrides): Promise<[BigNumber]>;

    setWeekInfo(
      _weekNumber: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _amountOfWeeks: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWeekState(
      _weekNumber: BigNumberish,
      _rewardRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      _amount: BigNumberish,
      _weekNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeToken(overrides?: CallOverrides): Promise<[string]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    userStake(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        staked: BigNumber;
        secondsTillWeekEnd: BigNumber;
        weekNumber: BigNumber;
        lastWeekCalculated: BigNumber;
      }
    >;

    userStaked(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    userWithdraw(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        stakesWithdrawn: BigNumber;
        secondsTillWeekEnd: BigNumber;
        weekNumber: BigNumber;
        lastWeekCalculated: BigNumber;
      }
    >;

    viewTotalRewards(
      _weekNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { reward: BigNumber }>;

    viewVestedRewards(
      _weekNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { reward: BigNumber }>;

    weekInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        startTime: BigNumber;
        endTime: BigNumber;
        rewardRate: BigNumber;
        staked: BigNumber;
        stakesWithdrawn: BigNumber;
        totalStakedAmount: BigNumber;
        highestStakedPoint: BigNumber;
      }
    >;

    withdraw(
      _amount: BigNumberish,
      _weekNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawUnlockTime(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  TREASURY_ROLE(overrides?: CallOverrides): Promise<string>;

  UPDATER_ROLE(overrides?: CallOverrides): Promise<string>;

  claimRewards(
    _weekNumber: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositEndTime(overrides?: CallOverrides): Promise<BigNumber>;

  emergencyClaim(
    _weekNumber: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  falseRewardClaimed(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  falseRewardUnclaimed(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      amount: BigNumber;
      unlockTime: BigNumber;
      recordTime: BigNumber;
    }
  >;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initialize(
    _reservoir: string,
    _rewardToken: string,
    _stakeToken: string,
    _startWeekNumber: BigNumberish,
    _startWeekStartTime: BigNumberish,
    _startWeekEndTime: BigNumberish,
    _amountOfWeeksToSet: BigNumberish,
    _rewardsVestingDuration: BigNumberish,
    _depositEndTime: BigNumberish,
    _treasury: string,
    _updater: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  reservoir(overrides?: CallOverrides): Promise<string>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardClaimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  rewardRateCoeff(overrides?: CallOverrides): Promise<BigNumber>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  rewardUnclaimed(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      amount: BigNumber;
      unlockTime: BigNumber;
      recordTime: BigNumber;
    }
  >;

  rewardsVestingDuration(overrides?: CallOverrides): Promise<BigNumber>;

  secondsInAWeek(overrides?: CallOverrides): Promise<BigNumber>;

  setWeekInfo(
    _weekNumber: BigNumberish,
    _startTime: BigNumberish,
    _endTime: BigNumberish,
    _amountOfWeeks: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWeekState(
    _weekNumber: BigNumberish,
    _rewardRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    _amount: BigNumberish,
    _weekNumber: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeToken(overrides?: CallOverrides): Promise<string>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  userStake(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      staked: BigNumber;
      secondsTillWeekEnd: BigNumber;
      weekNumber: BigNumber;
      lastWeekCalculated: BigNumber;
    }
  >;

  userStaked(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  userWithdraw(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      stakesWithdrawn: BigNumber;
      secondsTillWeekEnd: BigNumber;
      weekNumber: BigNumber;
      lastWeekCalculated: BigNumber;
    }
  >;

  viewTotalRewards(
    _weekNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  viewVestedRewards(
    _weekNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  weekInfo(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      startTime: BigNumber;
      endTime: BigNumber;
      rewardRate: BigNumber;
      staked: BigNumber;
      stakesWithdrawn: BigNumber;
      totalStakedAmount: BigNumber;
      highestStakedPoint: BigNumber;
    }
  >;

  withdraw(
    _amount: BigNumberish,
    _weekNumber: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawUnlockTime(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    TREASURY_ROLE(overrides?: CallOverrides): Promise<string>;

    UPDATER_ROLE(overrides?: CallOverrides): Promise<string>;

    claimRewards(
      _weekNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositEndTime(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyClaim(
      _weekNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    falseRewardClaimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    falseRewardUnclaimed(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        unlockTime: BigNumber;
        recordTime: BigNumber;
      }
    >;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      _reservoir: string,
      _rewardToken: string,
      _stakeToken: string,
      _startWeekNumber: BigNumberish,
      _startWeekStartTime: BigNumberish,
      _startWeekEndTime: BigNumberish,
      _amountOfWeeksToSet: BigNumberish,
      _rewardsVestingDuration: BigNumberish,
      _depositEndTime: BigNumberish,
      _treasury: string,
      _updater: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    reservoir(overrides?: CallOverrides): Promise<string>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    rewardClaimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    rewardRateCoeff(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    rewardUnclaimed(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        unlockTime: BigNumber;
        recordTime: BigNumber;
      }
    >;

    rewardsVestingDuration(overrides?: CallOverrides): Promise<BigNumber>;

    secondsInAWeek(overrides?: CallOverrides): Promise<BigNumber>;

    setWeekInfo(
      _weekNumber: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _amountOfWeeks: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setWeekState(
      _weekNumber: BigNumberish,
      _rewardRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(
      _amount: BigNumberish,
      _weekNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakeToken(overrides?: CallOverrides): Promise<string>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    userStake(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        staked: BigNumber;
        secondsTillWeekEnd: BigNumber;
        weekNumber: BigNumber;
        lastWeekCalculated: BigNumber;
      }
    >;

    userStaked(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    userWithdraw(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        stakesWithdrawn: BigNumber;
        secondsTillWeekEnd: BigNumber;
        weekNumber: BigNumber;
        lastWeekCalculated: BigNumber;
      }
    >;

    viewTotalRewards(
      _weekNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewVestedRewards(
      _weekNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weekInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        startTime: BigNumber;
        endTime: BigNumber;
        rewardRate: BigNumber;
        staked: BigNumber;
        stakesWithdrawn: BigNumber;
        totalStakedAmount: BigNumber;
        highestStakedPoint: BigNumber;
      }
    >;

    withdraw(
      _amount: BigNumberish,
      _weekNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawUnlockTime(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Claimed(address,uint256)"(
      claimer?: null,
      amount?: null
    ): ClaimedEventFilter;
    Claimed(claimer?: null, amount?: null): ClaimedEventFilter;

    "EmergencyClaimed(address,uint256,uint256)"(
      claimer?: null,
      rewardAmount?: null,
      penaltyAmount?: null
    ): EmergencyClaimedEventFilter;
    EmergencyClaimed(
      claimer?: null,
      rewardAmount?: null,
      penaltyAmount?: null
    ): EmergencyClaimedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;

    "Staked(address,uint256,uint256)"(
      staker?: null,
      weekNumber?: null,
      amount?: null
    ): StakedEventFilter;
    Staked(staker?: null, weekNumber?: null, amount?: null): StakedEventFilter;

    "Withdrawn(address,uint256)"(
      staker?: null,
      amount?: null
    ): WithdrawnEventFilter;
    Withdrawn(staker?: null, amount?: null): WithdrawnEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    TREASURY_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    UPDATER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    claimRewards(
      _weekNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositEndTime(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyClaim(
      _weekNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    falseRewardClaimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    falseRewardUnclaimed(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _reservoir: string,
      _rewardToken: string,
      _stakeToken: string,
      _startWeekNumber: BigNumberish,
      _startWeekStartTime: BigNumberish,
      _startWeekEndTime: BigNumberish,
      _amountOfWeeksToSet: BigNumberish,
      _rewardsVestingDuration: BigNumberish,
      _depositEndTime: BigNumberish,
      _treasury: string,
      _updater: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    reservoir(overrides?: CallOverrides): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardClaimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    rewardRateCoeff(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardUnclaimed(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardsVestingDuration(overrides?: CallOverrides): Promise<BigNumber>;

    secondsInAWeek(overrides?: CallOverrides): Promise<BigNumber>;

    setWeekInfo(
      _weekNumber: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _amountOfWeeks: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWeekState(
      _weekNumber: BigNumberish,
      _rewardRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      _amount: BigNumberish,
      _weekNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeToken(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userStake(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userStaked(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    userWithdraw(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewTotalRewards(
      _weekNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewVestedRewards(
      _weekNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weekInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _amount: BigNumberish,
      _weekNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawUnlockTime(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TREASURY_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UPDATER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimRewards(
      _weekNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositEndTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emergencyClaim(
      _weekNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    falseRewardClaimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    falseRewardUnclaimed(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _reservoir: string,
      _rewardToken: string,
      _stakeToken: string,
      _startWeekNumber: BigNumberish,
      _startWeekStartTime: BigNumberish,
      _startWeekEndTime: BigNumberish,
      _amountOfWeeksToSet: BigNumberish,
      _rewardsVestingDuration: BigNumberish,
      _depositEndTime: BigNumberish,
      _treasury: string,
      _updater: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    reservoir(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardClaimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardRateCoeff(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardUnclaimed(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardsVestingDuration(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    secondsInAWeek(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setWeekInfo(
      _weekNumber: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _amountOfWeeks: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWeekState(
      _weekNumber: BigNumberish,
      _rewardRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      _amount: BigNumberish,
      _weekNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userStake(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userStaked(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userWithdraw(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewTotalRewards(
      _weekNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewVestedRewards(
      _weekNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    weekInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _amount: BigNumberish,
      _weekNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawUnlockTime(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
