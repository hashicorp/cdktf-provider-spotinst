// https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MrscalerAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#additional_info MrscalerAws#additional_info}
  */
  readonly additionalInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#additional_primary_security_groups MrscalerAws#additional_primary_security_groups}
  */
  readonly additionalPrimarySecurityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#additional_replica_security_groups MrscalerAws#additional_replica_security_groups}
  */
  readonly additionalReplicaSecurityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#availability_zones MrscalerAws#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#cluster_id MrscalerAws#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#core_desired_capacity MrscalerAws#core_desired_capacity}
  */
  readonly coreDesiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#core_ebs_optimized MrscalerAws#core_ebs_optimized}
  */
  readonly coreEbsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#core_instance_types MrscalerAws#core_instance_types}
  */
  readonly coreInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#core_lifecycle MrscalerAws#core_lifecycle}
  */
  readonly coreLifecycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#core_max_size MrscalerAws#core_max_size}
  */
  readonly coreMaxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#core_min_size MrscalerAws#core_min_size}
  */
  readonly coreMinSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#core_unit MrscalerAws#core_unit}
  */
  readonly coreUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#custom_ami_id MrscalerAws#custom_ami_id}
  */
  readonly customAmiId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#description MrscalerAws#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#ebs_root_volume_size MrscalerAws#ebs_root_volume_size}
  */
  readonly ebsRootVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#ec2_key_name MrscalerAws#ec2_key_name}
  */
  readonly ec2KeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#expose_cluster_id MrscalerAws#expose_cluster_id}
  */
  readonly exposeClusterId?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#job_flow_role MrscalerAws#job_flow_role}
  */
  readonly jobFlowRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#keep_job_flow_alive MrscalerAws#keep_job_flow_alive}
  */
  readonly keepJobFlowAlive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#log_uri MrscalerAws#log_uri}
  */
  readonly logUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#managed_primary_security_group MrscalerAws#managed_primary_security_group}
  */
  readonly managedPrimarySecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#managed_replica_security_group MrscalerAws#managed_replica_security_group}
  */
  readonly managedReplicaSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#master_ebs_optimized MrscalerAws#master_ebs_optimized}
  */
  readonly masterEbsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#master_instance_types MrscalerAws#master_instance_types}
  */
  readonly masterInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#master_lifecycle MrscalerAws#master_lifecycle}
  */
  readonly masterLifecycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#master_target MrscalerAws#master_target}
  */
  readonly masterTarget?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#name MrscalerAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#region MrscalerAws#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#release_label MrscalerAws#release_label}
  */
  readonly releaseLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#repo_upgrade_on_boot MrscalerAws#repo_upgrade_on_boot}
  */
  readonly repoUpgradeOnBoot?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#retries MrscalerAws#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#security_config MrscalerAws#security_config}
  */
  readonly securityConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#service_access_security_group MrscalerAws#service_access_security_group}
  */
  readonly serviceAccessSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#service_role MrscalerAws#service_role}
  */
  readonly serviceRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#strategy MrscalerAws#strategy}
  */
  readonly strategy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#task_desired_capacity MrscalerAws#task_desired_capacity}
  */
  readonly taskDesiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#task_ebs_optimized MrscalerAws#task_ebs_optimized}
  */
  readonly taskEbsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#task_instance_types MrscalerAws#task_instance_types}
  */
  readonly taskInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#task_lifecycle MrscalerAws#task_lifecycle}
  */
  readonly taskLifecycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#task_max_size MrscalerAws#task_max_size}
  */
  readonly taskMaxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#task_min_size MrscalerAws#task_min_size}
  */
  readonly taskMinSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#task_unit MrscalerAws#task_unit}
  */
  readonly taskUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#termination_protected MrscalerAws#termination_protected}
  */
  readonly terminationProtected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#visible_to_all_users MrscalerAws#visible_to_all_users}
  */
  readonly visibleToAllUsers?: boolean | cdktf.IResolvable;
  /**
  * applications block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#applications MrscalerAws#applications}
  */
  readonly applications?: MrscalerAwsApplications[] | cdktf.IResolvable;
  /**
  * bootstrap_actions_file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#bootstrap_actions_file MrscalerAws#bootstrap_actions_file}
  */
  readonly bootstrapActionsFile?: MrscalerAwsBootstrapActionsFile[] | cdktf.IResolvable;
  /**
  * configurations_file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#configurations_file MrscalerAws#configurations_file}
  */
  readonly configurationsFile?: MrscalerAwsConfigurationsFile[] | cdktf.IResolvable;
  /**
  * core_ebs_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#core_ebs_block_device MrscalerAws#core_ebs_block_device}
  */
  readonly coreEbsBlockDevice?: MrscalerAwsCoreEbsBlockDevice[] | cdktf.IResolvable;
  /**
  * core_scaling_down_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#core_scaling_down_policy MrscalerAws#core_scaling_down_policy}
  */
  readonly coreScalingDownPolicy?: MrscalerAwsCoreScalingDownPolicy[] | cdktf.IResolvable;
  /**
  * core_scaling_up_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#core_scaling_up_policy MrscalerAws#core_scaling_up_policy}
  */
  readonly coreScalingUpPolicy?: MrscalerAwsCoreScalingUpPolicy[] | cdktf.IResolvable;
  /**
  * instance_weights block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#instance_weights MrscalerAws#instance_weights}
  */
  readonly instanceWeights?: MrscalerAwsInstanceWeights[] | cdktf.IResolvable;
  /**
  * master_ebs_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#master_ebs_block_device MrscalerAws#master_ebs_block_device}
  */
  readonly masterEbsBlockDevice?: MrscalerAwsMasterEbsBlockDevice[] | cdktf.IResolvable;
  /**
  * provisioning_timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#provisioning_timeout MrscalerAws#provisioning_timeout}
  */
  readonly provisioningTimeout?: MrscalerAwsProvisioningTimeout;
  /**
  * scheduled_task block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#scheduled_task MrscalerAws#scheduled_task}
  */
  readonly scheduledTask?: MrscalerAwsScheduledTask[] | cdktf.IResolvable;
  /**
  * steps_file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#steps_file MrscalerAws#steps_file}
  */
  readonly stepsFile?: MrscalerAwsStepsFile[] | cdktf.IResolvable;
  /**
  * tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#tags MrscalerAws#tags}
  */
  readonly tags?: MrscalerAwsTags[] | cdktf.IResolvable;
  /**
  * task_ebs_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#task_ebs_block_device MrscalerAws#task_ebs_block_device}
  */
  readonly taskEbsBlockDevice?: MrscalerAwsTaskEbsBlockDevice[] | cdktf.IResolvable;
  /**
  * task_scaling_down_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#task_scaling_down_policy MrscalerAws#task_scaling_down_policy}
  */
  readonly taskScalingDownPolicy?: MrscalerAwsTaskScalingDownPolicy[] | cdktf.IResolvable;
  /**
  * task_scaling_up_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#task_scaling_up_policy MrscalerAws#task_scaling_up_policy}
  */
  readonly taskScalingUpPolicy?: MrscalerAwsTaskScalingUpPolicy[] | cdktf.IResolvable;
  /**
  * termination_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#termination_policies MrscalerAws#termination_policies}
  */
  readonly terminationPolicies?: MrscalerAwsTerminationPolicies[] | cdktf.IResolvable;
}
export interface MrscalerAwsApplications {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#args MrscalerAws#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#name MrscalerAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#version MrscalerAws#version}
  */
  readonly version?: string;
}

export function mrscalerAwsApplicationsToTerraform(struct?: MrscalerAwsApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface MrscalerAwsBootstrapActionsFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#bucket MrscalerAws#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#key MrscalerAws#key}
  */
  readonly key: string;
}

export function mrscalerAwsBootstrapActionsFileToTerraform(struct?: MrscalerAwsBootstrapActionsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface MrscalerAwsConfigurationsFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#bucket MrscalerAws#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#key MrscalerAws#key}
  */
  readonly key: string;
}

export function mrscalerAwsConfigurationsFileToTerraform(struct?: MrscalerAwsConfigurationsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface MrscalerAwsCoreEbsBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#iops MrscalerAws#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}
  */
  readonly sizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#volume_type MrscalerAws#volume_type}
  */
  readonly volumeType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}
  */
  readonly volumesPerInstance?: number;
}

export function mrscalerAwsCoreEbsBlockDeviceToTerraform(struct?: MrscalerAwsCoreEbsBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    size_in_gb: cdktf.numberToTerraform(struct!.sizeInGb),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
  }
}

export interface MrscalerAwsCoreScalingDownPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#action_type MrscalerAws#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#adjustment MrscalerAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#cooldown MrscalerAws#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#dimensions MrscalerAws#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#maximum MrscalerAws#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#metric_name MrscalerAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#minimum MrscalerAws#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#namespace MrscalerAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#operator MrscalerAws#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#period MrscalerAws#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#policy_name MrscalerAws#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#statistic MrscalerAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#target MrscalerAws#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#threshold MrscalerAws#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#unit MrscalerAws#unit}
  */
  readonly unit: string;
}

export function mrscalerAwsCoreScalingDownPolicyToTerraform(struct?: MrscalerAwsCoreScalingDownPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dimensions),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    target: cdktf.stringToTerraform(struct!.target),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}

export interface MrscalerAwsCoreScalingUpPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#action_type MrscalerAws#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#adjustment MrscalerAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#cooldown MrscalerAws#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#dimensions MrscalerAws#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#maximum MrscalerAws#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#metric_name MrscalerAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#minimum MrscalerAws#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#namespace MrscalerAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#operator MrscalerAws#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#period MrscalerAws#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#policy_name MrscalerAws#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#statistic MrscalerAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#target MrscalerAws#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#threshold MrscalerAws#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#unit MrscalerAws#unit}
  */
  readonly unit: string;
}

export function mrscalerAwsCoreScalingUpPolicyToTerraform(struct?: MrscalerAwsCoreScalingUpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dimensions),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    target: cdktf.stringToTerraform(struct!.target),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}

export interface MrscalerAwsInstanceWeights {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#instance_type MrscalerAws#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#weighted_capacity MrscalerAws#weighted_capacity}
  */
  readonly weightedCapacity: number;
}

export function mrscalerAwsInstanceWeightsToTerraform(struct?: MrscalerAwsInstanceWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
  }
}

export interface MrscalerAwsMasterEbsBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#iops MrscalerAws#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}
  */
  readonly sizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#volume_type MrscalerAws#volume_type}
  */
  readonly volumeType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}
  */
  readonly volumesPerInstance?: number;
}

export function mrscalerAwsMasterEbsBlockDeviceToTerraform(struct?: MrscalerAwsMasterEbsBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    size_in_gb: cdktf.numberToTerraform(struct!.sizeInGb),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
  }
}

export interface MrscalerAwsProvisioningTimeout {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#timeout MrscalerAws#timeout}
  */
  readonly timeout: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#timeout_action MrscalerAws#timeout_action}
  */
  readonly timeoutAction: string;
}

export function mrscalerAwsProvisioningTimeoutToTerraform(struct?: MrscalerAwsProvisioningTimeoutOutputReference | MrscalerAwsProvisioningTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.numberToTerraform(struct!.timeout),
    timeout_action: cdktf.stringToTerraform(struct!.timeoutAction),
  }
}

export class MrscalerAwsProvisioningTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrscalerAwsProvisioningTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._timeoutAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutAction = this._timeoutAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrscalerAwsProvisioningTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeout = undefined;
      this._timeoutAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeout = value.timeout;
      this._timeoutAction = value.timeoutAction;
    }
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // timeout_action - computed: false, optional: false, required: true
  private _timeoutAction?: string; 
  public get timeoutAction() {
    return this.getStringAttribute('timeout_action');
  }
  public set timeoutAction(value: string) {
    this._timeoutAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutActionInput() {
    return this._timeoutAction;
  }
}
export interface MrscalerAwsScheduledTask {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#cron MrscalerAws#cron}
  */
  readonly cron: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#desired_capacity MrscalerAws#desired_capacity}
  */
  readonly desiredCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#instance_group_type MrscalerAws#instance_group_type}
  */
  readonly instanceGroupType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#is_enabled MrscalerAws#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#max_capacity MrscalerAws#max_capacity}
  */
  readonly maxCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#min_capacity MrscalerAws#min_capacity}
  */
  readonly minCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#task_type MrscalerAws#task_type}
  */
  readonly taskType: string;
}

export function mrscalerAwsScheduledTaskToTerraform(struct?: MrscalerAwsScheduledTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron: cdktf.stringToTerraform(struct!.cron),
    desired_capacity: cdktf.stringToTerraform(struct!.desiredCapacity),
    instance_group_type: cdktf.stringToTerraform(struct!.instanceGroupType),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    max_capacity: cdktf.stringToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.stringToTerraform(struct!.minCapacity),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}

export interface MrscalerAwsStepsFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#bucket MrscalerAws#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#key MrscalerAws#key}
  */
  readonly key: string;
}

export function mrscalerAwsStepsFileToTerraform(struct?: MrscalerAwsStepsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface MrscalerAwsTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#key MrscalerAws#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#value MrscalerAws#value}
  */
  readonly value: string;
}

export function mrscalerAwsTagsToTerraform(struct?: MrscalerAwsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface MrscalerAwsTaskEbsBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#iops MrscalerAws#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}
  */
  readonly sizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#volume_type MrscalerAws#volume_type}
  */
  readonly volumeType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}
  */
  readonly volumesPerInstance?: number;
}

export function mrscalerAwsTaskEbsBlockDeviceToTerraform(struct?: MrscalerAwsTaskEbsBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    size_in_gb: cdktf.numberToTerraform(struct!.sizeInGb),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
  }
}

export interface MrscalerAwsTaskScalingDownPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#action_type MrscalerAws#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#adjustment MrscalerAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#cooldown MrscalerAws#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#dimensions MrscalerAws#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#maximum MrscalerAws#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#metric_name MrscalerAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#minimum MrscalerAws#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#namespace MrscalerAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#operator MrscalerAws#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#period MrscalerAws#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#policy_name MrscalerAws#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#statistic MrscalerAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#target MrscalerAws#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#threshold MrscalerAws#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#unit MrscalerAws#unit}
  */
  readonly unit: string;
}

export function mrscalerAwsTaskScalingDownPolicyToTerraform(struct?: MrscalerAwsTaskScalingDownPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dimensions),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    target: cdktf.stringToTerraform(struct!.target),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}

export interface MrscalerAwsTaskScalingUpPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#action_type MrscalerAws#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#adjustment MrscalerAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#cooldown MrscalerAws#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#dimensions MrscalerAws#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#maximum MrscalerAws#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#metric_name MrscalerAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#minimum MrscalerAws#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#namespace MrscalerAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#operator MrscalerAws#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#period MrscalerAws#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#policy_name MrscalerAws#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#statistic MrscalerAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#target MrscalerAws#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#threshold MrscalerAws#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#unit MrscalerAws#unit}
  */
  readonly unit: string;
}

export function mrscalerAwsTaskScalingUpPolicyToTerraform(struct?: MrscalerAwsTaskScalingUpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dimensions),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    target: cdktf.stringToTerraform(struct!.target),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}

export interface MrscalerAwsTerminationPoliciesStatements {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#metric_name MrscalerAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#namespace MrscalerAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#operator MrscalerAws#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#period MrscalerAws#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#statistic MrscalerAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#threshold MrscalerAws#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#unit MrscalerAws#unit}
  */
  readonly unit?: string;
}

export function mrscalerAwsTerminationPoliciesStatementsToTerraform(struct?: MrscalerAwsTerminationPoliciesStatements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}

export interface MrscalerAwsTerminationPolicies {
  /**
  * statements block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws#statements MrscalerAws#statements}
  */
  readonly statements: MrscalerAwsTerminationPoliciesStatements[] | cdktf.IResolvable;
}

export function mrscalerAwsTerminationPoliciesToTerraform(struct?: MrscalerAwsTerminationPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    statements: cdktf.listMapper(mrscalerAwsTerminationPoliciesStatementsToTerraform)(struct!.statements),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws spotinst_mrscaler_aws}
*/
export class MrscalerAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_mrscaler_aws";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/mrscaler_aws spotinst_mrscaler_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MrscalerAwsConfig
  */
  public constructor(scope: Construct, id: string, config: MrscalerAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_mrscaler_aws',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.73.3',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalInfo = config.additionalInfo;
    this._additionalPrimarySecurityGroups = config.additionalPrimarySecurityGroups;
    this._additionalReplicaSecurityGroups = config.additionalReplicaSecurityGroups;
    this._availabilityZones = config.availabilityZones;
    this._clusterId = config.clusterId;
    this._coreDesiredCapacity = config.coreDesiredCapacity;
    this._coreEbsOptimized = config.coreEbsOptimized;
    this._coreInstanceTypes = config.coreInstanceTypes;
    this._coreLifecycle = config.coreLifecycle;
    this._coreMaxSize = config.coreMaxSize;
    this._coreMinSize = config.coreMinSize;
    this._coreUnit = config.coreUnit;
    this._customAmiId = config.customAmiId;
    this._description = config.description;
    this._ebsRootVolumeSize = config.ebsRootVolumeSize;
    this._ec2KeyName = config.ec2KeyName;
    this._exposeClusterId = config.exposeClusterId;
    this._jobFlowRole = config.jobFlowRole;
    this._keepJobFlowAlive = config.keepJobFlowAlive;
    this._logUri = config.logUri;
    this._managedPrimarySecurityGroup = config.managedPrimarySecurityGroup;
    this._managedReplicaSecurityGroup = config.managedReplicaSecurityGroup;
    this._masterEbsOptimized = config.masterEbsOptimized;
    this._masterInstanceTypes = config.masterInstanceTypes;
    this._masterLifecycle = config.masterLifecycle;
    this._masterTarget = config.masterTarget;
    this._name = config.name;
    this._region = config.region;
    this._releaseLabel = config.releaseLabel;
    this._repoUpgradeOnBoot = config.repoUpgradeOnBoot;
    this._retries = config.retries;
    this._securityConfig = config.securityConfig;
    this._serviceAccessSecurityGroup = config.serviceAccessSecurityGroup;
    this._serviceRole = config.serviceRole;
    this._strategy = config.strategy;
    this._taskDesiredCapacity = config.taskDesiredCapacity;
    this._taskEbsOptimized = config.taskEbsOptimized;
    this._taskInstanceTypes = config.taskInstanceTypes;
    this._taskLifecycle = config.taskLifecycle;
    this._taskMaxSize = config.taskMaxSize;
    this._taskMinSize = config.taskMinSize;
    this._taskUnit = config.taskUnit;
    this._terminationProtected = config.terminationProtected;
    this._visibleToAllUsers = config.visibleToAllUsers;
    this._applications = config.applications;
    this._bootstrapActionsFile = config.bootstrapActionsFile;
    this._configurationsFile = config.configurationsFile;
    this._coreEbsBlockDevice = config.coreEbsBlockDevice;
    this._coreScalingDownPolicy = config.coreScalingDownPolicy;
    this._coreScalingUpPolicy = config.coreScalingUpPolicy;
    this._instanceWeights = config.instanceWeights;
    this._masterEbsBlockDevice = config.masterEbsBlockDevice;
    this._provisioningTimeout.internalValue = config.provisioningTimeout;
    this._scheduledTask = config.scheduledTask;
    this._stepsFile = config.stepsFile;
    this._tags = config.tags;
    this._taskEbsBlockDevice = config.taskEbsBlockDevice;
    this._taskScalingDownPolicy = config.taskScalingDownPolicy;
    this._taskScalingUpPolicy = config.taskScalingUpPolicy;
    this._terminationPolicies = config.terminationPolicies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_info - computed: false, optional: true, required: false
  private _additionalInfo?: string; 
  public get additionalInfo() {
    return this.getStringAttribute('additional_info');
  }
  public set additionalInfo(value: string) {
    this._additionalInfo = value;
  }
  public resetAdditionalInfo() {
    this._additionalInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInfoInput() {
    return this._additionalInfo;
  }

  // additional_primary_security_groups - computed: false, optional: true, required: false
  private _additionalPrimarySecurityGroups?: string[]; 
  public get additionalPrimarySecurityGroups() {
    return this.getListAttribute('additional_primary_security_groups');
  }
  public set additionalPrimarySecurityGroups(value: string[]) {
    this._additionalPrimarySecurityGroups = value;
  }
  public resetAdditionalPrimarySecurityGroups() {
    this._additionalPrimarySecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPrimarySecurityGroupsInput() {
    return this._additionalPrimarySecurityGroups;
  }

  // additional_replica_security_groups - computed: false, optional: true, required: false
  private _additionalReplicaSecurityGroups?: string[]; 
  public get additionalReplicaSecurityGroups() {
    return this.getListAttribute('additional_replica_security_groups');
  }
  public set additionalReplicaSecurityGroups(value: string[]) {
    this._additionalReplicaSecurityGroups = value;
  }
  public resetAdditionalReplicaSecurityGroups() {
    this._additionalReplicaSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalReplicaSecurityGroupsInput() {
    return this._additionalReplicaSecurityGroups;
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // core_desired_capacity - computed: false, optional: true, required: false
  private _coreDesiredCapacity?: number; 
  public get coreDesiredCapacity() {
    return this.getNumberAttribute('core_desired_capacity');
  }
  public set coreDesiredCapacity(value: number) {
    this._coreDesiredCapacity = value;
  }
  public resetCoreDesiredCapacity() {
    this._coreDesiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreDesiredCapacityInput() {
    return this._coreDesiredCapacity;
  }

  // core_ebs_optimized - computed: false, optional: true, required: false
  private _coreEbsOptimized?: boolean | cdktf.IResolvable; 
  public get coreEbsOptimized() {
    return this.getBooleanAttribute('core_ebs_optimized');
  }
  public set coreEbsOptimized(value: boolean | cdktf.IResolvable) {
    this._coreEbsOptimized = value;
  }
  public resetCoreEbsOptimized() {
    this._coreEbsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreEbsOptimizedInput() {
    return this._coreEbsOptimized;
  }

  // core_instance_types - computed: false, optional: true, required: false
  private _coreInstanceTypes?: string[]; 
  public get coreInstanceTypes() {
    return this.getListAttribute('core_instance_types');
  }
  public set coreInstanceTypes(value: string[]) {
    this._coreInstanceTypes = value;
  }
  public resetCoreInstanceTypes() {
    this._coreInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreInstanceTypesInput() {
    return this._coreInstanceTypes;
  }

  // core_lifecycle - computed: false, optional: true, required: false
  private _coreLifecycle?: string; 
  public get coreLifecycle() {
    return this.getStringAttribute('core_lifecycle');
  }
  public set coreLifecycle(value: string) {
    this._coreLifecycle = value;
  }
  public resetCoreLifecycle() {
    this._coreLifecycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreLifecycleInput() {
    return this._coreLifecycle;
  }

  // core_max_size - computed: false, optional: true, required: false
  private _coreMaxSize?: number; 
  public get coreMaxSize() {
    return this.getNumberAttribute('core_max_size');
  }
  public set coreMaxSize(value: number) {
    this._coreMaxSize = value;
  }
  public resetCoreMaxSize() {
    this._coreMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreMaxSizeInput() {
    return this._coreMaxSize;
  }

  // core_min_size - computed: false, optional: true, required: false
  private _coreMinSize?: number; 
  public get coreMinSize() {
    return this.getNumberAttribute('core_min_size');
  }
  public set coreMinSize(value: number) {
    this._coreMinSize = value;
  }
  public resetCoreMinSize() {
    this._coreMinSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreMinSizeInput() {
    return this._coreMinSize;
  }

  // core_unit - computed: false, optional: true, required: false
  private _coreUnit?: string; 
  public get coreUnit() {
    return this.getStringAttribute('core_unit');
  }
  public set coreUnit(value: string) {
    this._coreUnit = value;
  }
  public resetCoreUnit() {
    this._coreUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreUnitInput() {
    return this._coreUnit;
  }

  // custom_ami_id - computed: false, optional: true, required: false
  private _customAmiId?: string; 
  public get customAmiId() {
    return this.getStringAttribute('custom_ami_id');
  }
  public set customAmiId(value: string) {
    this._customAmiId = value;
  }
  public resetCustomAmiId() {
    this._customAmiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAmiIdInput() {
    return this._customAmiId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // ebs_root_volume_size - computed: false, optional: true, required: false
  private _ebsRootVolumeSize?: number; 
  public get ebsRootVolumeSize() {
    return this.getNumberAttribute('ebs_root_volume_size');
  }
  public set ebsRootVolumeSize(value: number) {
    this._ebsRootVolumeSize = value;
  }
  public resetEbsRootVolumeSize() {
    this._ebsRootVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsRootVolumeSizeInput() {
    return this._ebsRootVolumeSize;
  }

  // ec2_key_name - computed: false, optional: true, required: false
  private _ec2KeyName?: string; 
  public get ec2KeyName() {
    return this.getStringAttribute('ec2_key_name');
  }
  public set ec2KeyName(value: string) {
    this._ec2KeyName = value;
  }
  public resetEc2KeyName() {
    this._ec2KeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2KeyNameInput() {
    return this._ec2KeyName;
  }

  // expose_cluster_id - computed: false, optional: true, required: false
  private _exposeClusterId?: boolean | cdktf.IResolvable; 
  public get exposeClusterId() {
    return this.getBooleanAttribute('expose_cluster_id');
  }
  public set exposeClusterId(value: boolean | cdktf.IResolvable) {
    this._exposeClusterId = value;
  }
  public resetExposeClusterId() {
    this._exposeClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeClusterIdInput() {
    return this._exposeClusterId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_flow_role - computed: false, optional: true, required: false
  private _jobFlowRole?: string; 
  public get jobFlowRole() {
    return this.getStringAttribute('job_flow_role');
  }
  public set jobFlowRole(value: string) {
    this._jobFlowRole = value;
  }
  public resetJobFlowRole() {
    this._jobFlowRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobFlowRoleInput() {
    return this._jobFlowRole;
  }

  // keep_job_flow_alive - computed: false, optional: true, required: false
  private _keepJobFlowAlive?: boolean | cdktf.IResolvable; 
  public get keepJobFlowAlive() {
    return this.getBooleanAttribute('keep_job_flow_alive');
  }
  public set keepJobFlowAlive(value: boolean | cdktf.IResolvable) {
    this._keepJobFlowAlive = value;
  }
  public resetKeepJobFlowAlive() {
    this._keepJobFlowAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepJobFlowAliveInput() {
    return this._keepJobFlowAlive;
  }

  // log_uri - computed: false, optional: true, required: false
  private _logUri?: string; 
  public get logUri() {
    return this.getStringAttribute('log_uri');
  }
  public set logUri(value: string) {
    this._logUri = value;
  }
  public resetLogUri() {
    this._logUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUriInput() {
    return this._logUri;
  }

  // managed_primary_security_group - computed: false, optional: true, required: false
  private _managedPrimarySecurityGroup?: string; 
  public get managedPrimarySecurityGroup() {
    return this.getStringAttribute('managed_primary_security_group');
  }
  public set managedPrimarySecurityGroup(value: string) {
    this._managedPrimarySecurityGroup = value;
  }
  public resetManagedPrimarySecurityGroup() {
    this._managedPrimarySecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPrimarySecurityGroupInput() {
    return this._managedPrimarySecurityGroup;
  }

  // managed_replica_security_group - computed: false, optional: true, required: false
  private _managedReplicaSecurityGroup?: string; 
  public get managedReplicaSecurityGroup() {
    return this.getStringAttribute('managed_replica_security_group');
  }
  public set managedReplicaSecurityGroup(value: string) {
    this._managedReplicaSecurityGroup = value;
  }
  public resetManagedReplicaSecurityGroup() {
    this._managedReplicaSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedReplicaSecurityGroupInput() {
    return this._managedReplicaSecurityGroup;
  }

  // master_ebs_optimized - computed: false, optional: true, required: false
  private _masterEbsOptimized?: boolean | cdktf.IResolvable; 
  public get masterEbsOptimized() {
    return this.getBooleanAttribute('master_ebs_optimized');
  }
  public set masterEbsOptimized(value: boolean | cdktf.IResolvable) {
    this._masterEbsOptimized = value;
  }
  public resetMasterEbsOptimized() {
    this._masterEbsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterEbsOptimizedInput() {
    return this._masterEbsOptimized;
  }

  // master_instance_types - computed: false, optional: true, required: false
  private _masterInstanceTypes?: string[]; 
  public get masterInstanceTypes() {
    return this.getListAttribute('master_instance_types');
  }
  public set masterInstanceTypes(value: string[]) {
    this._masterInstanceTypes = value;
  }
  public resetMasterInstanceTypes() {
    this._masterInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInstanceTypesInput() {
    return this._masterInstanceTypes;
  }

  // master_lifecycle - computed: false, optional: true, required: false
  private _masterLifecycle?: string; 
  public get masterLifecycle() {
    return this.getStringAttribute('master_lifecycle');
  }
  public set masterLifecycle(value: string) {
    this._masterLifecycle = value;
  }
  public resetMasterLifecycle() {
    this._masterLifecycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterLifecycleInput() {
    return this._masterLifecycle;
  }

  // master_target - computed: false, optional: true, required: false
  private _masterTarget?: number; 
  public get masterTarget() {
    return this.getNumberAttribute('master_target');
  }
  public set masterTarget(value: number) {
    this._masterTarget = value;
  }
  public resetMasterTarget() {
    this._masterTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterTargetInput() {
    return this._masterTarget;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // output_cluster_id - computed: true, optional: false, required: false
  public get outputClusterId() {
    return this.getStringAttribute('output_cluster_id');
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // release_label - computed: false, optional: true, required: false
  private _releaseLabel?: string; 
  public get releaseLabel() {
    return this.getStringAttribute('release_label');
  }
  public set releaseLabel(value: string) {
    this._releaseLabel = value;
  }
  public resetReleaseLabel() {
    this._releaseLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseLabelInput() {
    return this._releaseLabel;
  }

  // repo_upgrade_on_boot - computed: false, optional: true, required: false
  private _repoUpgradeOnBoot?: string; 
  public get repoUpgradeOnBoot() {
    return this.getStringAttribute('repo_upgrade_on_boot');
  }
  public set repoUpgradeOnBoot(value: string) {
    this._repoUpgradeOnBoot = value;
  }
  public resetRepoUpgradeOnBoot() {
    this._repoUpgradeOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUpgradeOnBootInput() {
    return this._repoUpgradeOnBoot;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // security_config - computed: false, optional: true, required: false
  private _securityConfig?: string; 
  public get securityConfig() {
    return this.getStringAttribute('security_config');
  }
  public set securityConfig(value: string) {
    this._securityConfig = value;
  }
  public resetSecurityConfig() {
    this._securityConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigInput() {
    return this._securityConfig;
  }

  // service_access_security_group - computed: false, optional: true, required: false
  private _serviceAccessSecurityGroup?: string; 
  public get serviceAccessSecurityGroup() {
    return this.getStringAttribute('service_access_security_group');
  }
  public set serviceAccessSecurityGroup(value: string) {
    this._serviceAccessSecurityGroup = value;
  }
  public resetServiceAccessSecurityGroup() {
    this._serviceAccessSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessSecurityGroupInput() {
    return this._serviceAccessSecurityGroup;
  }

  // service_role - computed: false, optional: true, required: false
  private _serviceRole?: string; 
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }
  public resetServiceRole() {
    this._serviceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleInput() {
    return this._serviceRole;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // task_desired_capacity - computed: false, optional: true, required: false
  private _taskDesiredCapacity?: number; 
  public get taskDesiredCapacity() {
    return this.getNumberAttribute('task_desired_capacity');
  }
  public set taskDesiredCapacity(value: number) {
    this._taskDesiredCapacity = value;
  }
  public resetTaskDesiredCapacity() {
    this._taskDesiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDesiredCapacityInput() {
    return this._taskDesiredCapacity;
  }

  // task_ebs_optimized - computed: false, optional: true, required: false
  private _taskEbsOptimized?: boolean | cdktf.IResolvable; 
  public get taskEbsOptimized() {
    return this.getBooleanAttribute('task_ebs_optimized');
  }
  public set taskEbsOptimized(value: boolean | cdktf.IResolvable) {
    this._taskEbsOptimized = value;
  }
  public resetTaskEbsOptimized() {
    this._taskEbsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskEbsOptimizedInput() {
    return this._taskEbsOptimized;
  }

  // task_instance_types - computed: false, optional: true, required: false
  private _taskInstanceTypes?: string[]; 
  public get taskInstanceTypes() {
    return this.getListAttribute('task_instance_types');
  }
  public set taskInstanceTypes(value: string[]) {
    this._taskInstanceTypes = value;
  }
  public resetTaskInstanceTypes() {
    this._taskInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInstanceTypesInput() {
    return this._taskInstanceTypes;
  }

  // task_lifecycle - computed: false, optional: true, required: false
  private _taskLifecycle?: string; 
  public get taskLifecycle() {
    return this.getStringAttribute('task_lifecycle');
  }
  public set taskLifecycle(value: string) {
    this._taskLifecycle = value;
  }
  public resetTaskLifecycle() {
    this._taskLifecycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskLifecycleInput() {
    return this._taskLifecycle;
  }

  // task_max_size - computed: false, optional: true, required: false
  private _taskMaxSize?: number; 
  public get taskMaxSize() {
    return this.getNumberAttribute('task_max_size');
  }
  public set taskMaxSize(value: number) {
    this._taskMaxSize = value;
  }
  public resetTaskMaxSize() {
    this._taskMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskMaxSizeInput() {
    return this._taskMaxSize;
  }

  // task_min_size - computed: false, optional: true, required: false
  private _taskMinSize?: number; 
  public get taskMinSize() {
    return this.getNumberAttribute('task_min_size');
  }
  public set taskMinSize(value: number) {
    this._taskMinSize = value;
  }
  public resetTaskMinSize() {
    this._taskMinSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskMinSizeInput() {
    return this._taskMinSize;
  }

  // task_unit - computed: false, optional: true, required: false
  private _taskUnit?: string; 
  public get taskUnit() {
    return this.getStringAttribute('task_unit');
  }
  public set taskUnit(value: string) {
    this._taskUnit = value;
  }
  public resetTaskUnit() {
    this._taskUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskUnitInput() {
    return this._taskUnit;
  }

  // termination_protected - computed: false, optional: true, required: false
  private _terminationProtected?: boolean | cdktf.IResolvable; 
  public get terminationProtected() {
    return this.getBooleanAttribute('termination_protected');
  }
  public set terminationProtected(value: boolean | cdktf.IResolvable) {
    this._terminationProtected = value;
  }
  public resetTerminationProtected() {
    this._terminationProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectedInput() {
    return this._terminationProtected;
  }

  // visible_to_all_users - computed: false, optional: true, required: false
  private _visibleToAllUsers?: boolean | cdktf.IResolvable; 
  public get visibleToAllUsers() {
    return this.getBooleanAttribute('visible_to_all_users');
  }
  public set visibleToAllUsers(value: boolean | cdktf.IResolvable) {
    this._visibleToAllUsers = value;
  }
  public resetVisibleToAllUsers() {
    this._visibleToAllUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleToAllUsersInput() {
    return this._visibleToAllUsers;
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: MrscalerAwsApplications[] | cdktf.IResolvable; 
  public get applications() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('applications')));
  }
  public set applications(value: MrscalerAwsApplications[] | cdktf.IResolvable) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // bootstrap_actions_file - computed: false, optional: true, required: false
  private _bootstrapActionsFile?: MrscalerAwsBootstrapActionsFile[] | cdktf.IResolvable; 
  public get bootstrapActionsFile() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('bootstrap_actions_file')));
  }
  public set bootstrapActionsFile(value: MrscalerAwsBootstrapActionsFile[] | cdktf.IResolvable) {
    this._bootstrapActionsFile = value;
  }
  public resetBootstrapActionsFile() {
    this._bootstrapActionsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapActionsFileInput() {
    return this._bootstrapActionsFile;
  }

  // configurations_file - computed: false, optional: true, required: false
  private _configurationsFile?: MrscalerAwsConfigurationsFile[] | cdktf.IResolvable; 
  public get configurationsFile() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('configurations_file')));
  }
  public set configurationsFile(value: MrscalerAwsConfigurationsFile[] | cdktf.IResolvable) {
    this._configurationsFile = value;
  }
  public resetConfigurationsFile() {
    this._configurationsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsFileInput() {
    return this._configurationsFile;
  }

  // core_ebs_block_device - computed: false, optional: true, required: false
  private _coreEbsBlockDevice?: MrscalerAwsCoreEbsBlockDevice[] | cdktf.IResolvable; 
  public get coreEbsBlockDevice() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('core_ebs_block_device')));
  }
  public set coreEbsBlockDevice(value: MrscalerAwsCoreEbsBlockDevice[] | cdktf.IResolvable) {
    this._coreEbsBlockDevice = value;
  }
  public resetCoreEbsBlockDevice() {
    this._coreEbsBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreEbsBlockDeviceInput() {
    return this._coreEbsBlockDevice;
  }

  // core_scaling_down_policy - computed: false, optional: true, required: false
  private _coreScalingDownPolicy?: MrscalerAwsCoreScalingDownPolicy[] | cdktf.IResolvable; 
  public get coreScalingDownPolicy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('core_scaling_down_policy')));
  }
  public set coreScalingDownPolicy(value: MrscalerAwsCoreScalingDownPolicy[] | cdktf.IResolvable) {
    this._coreScalingDownPolicy = value;
  }
  public resetCoreScalingDownPolicy() {
    this._coreScalingDownPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreScalingDownPolicyInput() {
    return this._coreScalingDownPolicy;
  }

  // core_scaling_up_policy - computed: false, optional: true, required: false
  private _coreScalingUpPolicy?: MrscalerAwsCoreScalingUpPolicy[] | cdktf.IResolvable; 
  public get coreScalingUpPolicy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('core_scaling_up_policy')));
  }
  public set coreScalingUpPolicy(value: MrscalerAwsCoreScalingUpPolicy[] | cdktf.IResolvable) {
    this._coreScalingUpPolicy = value;
  }
  public resetCoreScalingUpPolicy() {
    this._coreScalingUpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreScalingUpPolicyInput() {
    return this._coreScalingUpPolicy;
  }

  // instance_weights - computed: false, optional: true, required: false
  private _instanceWeights?: MrscalerAwsInstanceWeights[] | cdktf.IResolvable; 
  public get instanceWeights() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('instance_weights')));
  }
  public set instanceWeights(value: MrscalerAwsInstanceWeights[] | cdktf.IResolvable) {
    this._instanceWeights = value;
  }
  public resetInstanceWeights() {
    this._instanceWeights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceWeightsInput() {
    return this._instanceWeights;
  }

  // master_ebs_block_device - computed: false, optional: true, required: false
  private _masterEbsBlockDevice?: MrscalerAwsMasterEbsBlockDevice[] | cdktf.IResolvable; 
  public get masterEbsBlockDevice() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('master_ebs_block_device')));
  }
  public set masterEbsBlockDevice(value: MrscalerAwsMasterEbsBlockDevice[] | cdktf.IResolvable) {
    this._masterEbsBlockDevice = value;
  }
  public resetMasterEbsBlockDevice() {
    this._masterEbsBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterEbsBlockDeviceInput() {
    return this._masterEbsBlockDevice;
  }

  // provisioning_timeout - computed: false, optional: true, required: false
  private _provisioningTimeout = new MrscalerAwsProvisioningTimeoutOutputReference(this, "provisioning_timeout");
  public get provisioningTimeout() {
    return this._provisioningTimeout;
  }
  public putProvisioningTimeout(value: MrscalerAwsProvisioningTimeout) {
    this._provisioningTimeout.internalValue = value;
  }
  public resetProvisioningTimeout() {
    this._provisioningTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningTimeoutInput() {
    return this._provisioningTimeout.internalValue;
  }

  // scheduled_task - computed: false, optional: true, required: false
  private _scheduledTask?: MrscalerAwsScheduledTask[] | cdktf.IResolvable; 
  public get scheduledTask() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scheduled_task')));
  }
  public set scheduledTask(value: MrscalerAwsScheduledTask[] | cdktf.IResolvable) {
    this._scheduledTask = value;
  }
  public resetScheduledTask() {
    this._scheduledTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTaskInput() {
    return this._scheduledTask;
  }

  // steps_file - computed: false, optional: true, required: false
  private _stepsFile?: MrscalerAwsStepsFile[] | cdktf.IResolvable; 
  public get stepsFile() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('steps_file')));
  }
  public set stepsFile(value: MrscalerAwsStepsFile[] | cdktf.IResolvable) {
    this._stepsFile = value;
  }
  public resetStepsFile() {
    this._stepsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsFileInput() {
    return this._stepsFile;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: MrscalerAwsTags[] | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('tags')));
  }
  public set tags(value: MrscalerAwsTags[] | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // task_ebs_block_device - computed: false, optional: true, required: false
  private _taskEbsBlockDevice?: MrscalerAwsTaskEbsBlockDevice[] | cdktf.IResolvable; 
  public get taskEbsBlockDevice() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('task_ebs_block_device')));
  }
  public set taskEbsBlockDevice(value: MrscalerAwsTaskEbsBlockDevice[] | cdktf.IResolvable) {
    this._taskEbsBlockDevice = value;
  }
  public resetTaskEbsBlockDevice() {
    this._taskEbsBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskEbsBlockDeviceInput() {
    return this._taskEbsBlockDevice;
  }

  // task_scaling_down_policy - computed: false, optional: true, required: false
  private _taskScalingDownPolicy?: MrscalerAwsTaskScalingDownPolicy[] | cdktf.IResolvable; 
  public get taskScalingDownPolicy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('task_scaling_down_policy')));
  }
  public set taskScalingDownPolicy(value: MrscalerAwsTaskScalingDownPolicy[] | cdktf.IResolvable) {
    this._taskScalingDownPolicy = value;
  }
  public resetTaskScalingDownPolicy() {
    this._taskScalingDownPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskScalingDownPolicyInput() {
    return this._taskScalingDownPolicy;
  }

  // task_scaling_up_policy - computed: false, optional: true, required: false
  private _taskScalingUpPolicy?: MrscalerAwsTaskScalingUpPolicy[] | cdktf.IResolvable; 
  public get taskScalingUpPolicy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('task_scaling_up_policy')));
  }
  public set taskScalingUpPolicy(value: MrscalerAwsTaskScalingUpPolicy[] | cdktf.IResolvable) {
    this._taskScalingUpPolicy = value;
  }
  public resetTaskScalingUpPolicy() {
    this._taskScalingUpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskScalingUpPolicyInput() {
    return this._taskScalingUpPolicy;
  }

  // termination_policies - computed: false, optional: true, required: false
  private _terminationPolicies?: MrscalerAwsTerminationPolicies[] | cdktf.IResolvable; 
  public get terminationPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('termination_policies');
  }
  public set terminationPolicies(value: MrscalerAwsTerminationPolicies[] | cdktf.IResolvable) {
    this._terminationPolicies = value;
  }
  public resetTerminationPolicies() {
    this._terminationPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationPoliciesInput() {
    return this._terminationPolicies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_info: cdktf.stringToTerraform(this._additionalInfo),
      additional_primary_security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._additionalPrimarySecurityGroups),
      additional_replica_security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._additionalReplicaSecurityGroups),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      core_desired_capacity: cdktf.numberToTerraform(this._coreDesiredCapacity),
      core_ebs_optimized: cdktf.booleanToTerraform(this._coreEbsOptimized),
      core_instance_types: cdktf.listMapper(cdktf.stringToTerraform)(this._coreInstanceTypes),
      core_lifecycle: cdktf.stringToTerraform(this._coreLifecycle),
      core_max_size: cdktf.numberToTerraform(this._coreMaxSize),
      core_min_size: cdktf.numberToTerraform(this._coreMinSize),
      core_unit: cdktf.stringToTerraform(this._coreUnit),
      custom_ami_id: cdktf.stringToTerraform(this._customAmiId),
      description: cdktf.stringToTerraform(this._description),
      ebs_root_volume_size: cdktf.numberToTerraform(this._ebsRootVolumeSize),
      ec2_key_name: cdktf.stringToTerraform(this._ec2KeyName),
      expose_cluster_id: cdktf.booleanToTerraform(this._exposeClusterId),
      job_flow_role: cdktf.stringToTerraform(this._jobFlowRole),
      keep_job_flow_alive: cdktf.booleanToTerraform(this._keepJobFlowAlive),
      log_uri: cdktf.stringToTerraform(this._logUri),
      managed_primary_security_group: cdktf.stringToTerraform(this._managedPrimarySecurityGroup),
      managed_replica_security_group: cdktf.stringToTerraform(this._managedReplicaSecurityGroup),
      master_ebs_optimized: cdktf.booleanToTerraform(this._masterEbsOptimized),
      master_instance_types: cdktf.listMapper(cdktf.stringToTerraform)(this._masterInstanceTypes),
      master_lifecycle: cdktf.stringToTerraform(this._masterLifecycle),
      master_target: cdktf.numberToTerraform(this._masterTarget),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      release_label: cdktf.stringToTerraform(this._releaseLabel),
      repo_upgrade_on_boot: cdktf.stringToTerraform(this._repoUpgradeOnBoot),
      retries: cdktf.numberToTerraform(this._retries),
      security_config: cdktf.stringToTerraform(this._securityConfig),
      service_access_security_group: cdktf.stringToTerraform(this._serviceAccessSecurityGroup),
      service_role: cdktf.stringToTerraform(this._serviceRole),
      strategy: cdktf.stringToTerraform(this._strategy),
      task_desired_capacity: cdktf.numberToTerraform(this._taskDesiredCapacity),
      task_ebs_optimized: cdktf.booleanToTerraform(this._taskEbsOptimized),
      task_instance_types: cdktf.listMapper(cdktf.stringToTerraform)(this._taskInstanceTypes),
      task_lifecycle: cdktf.stringToTerraform(this._taskLifecycle),
      task_max_size: cdktf.numberToTerraform(this._taskMaxSize),
      task_min_size: cdktf.numberToTerraform(this._taskMinSize),
      task_unit: cdktf.stringToTerraform(this._taskUnit),
      termination_protected: cdktf.booleanToTerraform(this._terminationProtected),
      visible_to_all_users: cdktf.booleanToTerraform(this._visibleToAllUsers),
      applications: cdktf.listMapper(mrscalerAwsApplicationsToTerraform)(this._applications),
      bootstrap_actions_file: cdktf.listMapper(mrscalerAwsBootstrapActionsFileToTerraform)(this._bootstrapActionsFile),
      configurations_file: cdktf.listMapper(mrscalerAwsConfigurationsFileToTerraform)(this._configurationsFile),
      core_ebs_block_device: cdktf.listMapper(mrscalerAwsCoreEbsBlockDeviceToTerraform)(this._coreEbsBlockDevice),
      core_scaling_down_policy: cdktf.listMapper(mrscalerAwsCoreScalingDownPolicyToTerraform)(this._coreScalingDownPolicy),
      core_scaling_up_policy: cdktf.listMapper(mrscalerAwsCoreScalingUpPolicyToTerraform)(this._coreScalingUpPolicy),
      instance_weights: cdktf.listMapper(mrscalerAwsInstanceWeightsToTerraform)(this._instanceWeights),
      master_ebs_block_device: cdktf.listMapper(mrscalerAwsMasterEbsBlockDeviceToTerraform)(this._masterEbsBlockDevice),
      provisioning_timeout: mrscalerAwsProvisioningTimeoutToTerraform(this._provisioningTimeout.internalValue),
      scheduled_task: cdktf.listMapper(mrscalerAwsScheduledTaskToTerraform)(this._scheduledTask),
      steps_file: cdktf.listMapper(mrscalerAwsStepsFileToTerraform)(this._stepsFile),
      tags: cdktf.listMapper(mrscalerAwsTagsToTerraform)(this._tags),
      task_ebs_block_device: cdktf.listMapper(mrscalerAwsTaskEbsBlockDeviceToTerraform)(this._taskEbsBlockDevice),
      task_scaling_down_policy: cdktf.listMapper(mrscalerAwsTaskScalingDownPolicyToTerraform)(this._taskScalingDownPolicy),
      task_scaling_up_policy: cdktf.listMapper(mrscalerAwsTaskScalingUpPolicyToTerraform)(this._taskScalingUpPolicy),
      termination_policies: cdktf.listMapper(mrscalerAwsTerminationPoliciesToTerraform)(this._terminationPolicies),
    };
  }
}
