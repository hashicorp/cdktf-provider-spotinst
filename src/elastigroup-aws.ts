// https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElastigroupAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#availability_zones ElastigroupAws#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#block_devices_mode ElastigroupAws#block_devices_mode}
  */
  readonly blockDevicesMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#capacity_unit ElastigroupAws#capacity_unit}
  */
  readonly capacityUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#cpu_credits ElastigroupAws#cpu_credits}
  */
  readonly cpuCredits?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#description ElastigroupAws#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#desired_capacity ElastigroupAws#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#draining_timeout ElastigroupAws#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#ebs_optimized ElastigroupAws#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#elastic_ips ElastigroupAws#elastic_ips}
  */
  readonly elasticIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#elastic_load_balancers ElastigroupAws#elastic_load_balancers}
  */
  readonly elasticLoadBalancers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#enable_monitoring ElastigroupAws#enable_monitoring}
  */
  readonly enableMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#fallback_to_ondemand ElastigroupAws#fallback_to_ondemand}
  */
  readonly fallbackToOndemand: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#health_check_grace_period ElastigroupAws#health_check_grace_period}
  */
  readonly healthCheckGracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#health_check_type ElastigroupAws#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#health_check_unhealthy_duration_before_replacement ElastigroupAws#health_check_unhealthy_duration_before_replacement}
  */
  readonly healthCheckUnhealthyDurationBeforeReplacement?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#iam_instance_profile ElastigroupAws#iam_instance_profile}
  */
  readonly iamInstanceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#image_id ElastigroupAws#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#instance_types_ondemand ElastigroupAws#instance_types_ondemand}
  */
  readonly instanceTypesOndemand: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#instance_types_preferred_spot ElastigroupAws#instance_types_preferred_spot}
  */
  readonly instanceTypesPreferredSpot?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#instance_types_spot ElastigroupAws#instance_types_spot}
  */
  readonly instanceTypesSpot: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#key_name ElastigroupAws#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#lifetime_period ElastigroupAws#lifetime_period}
  */
  readonly lifetimePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#max_size ElastigroupAws#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#min_size ElastigroupAws#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#minimum_instance_lifetime ElastigroupAws#minimum_instance_lifetime}
  */
  readonly minimumInstanceLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#ondemand_count ElastigroupAws#ondemand_count}
  */
  readonly ondemandCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#orientation ElastigroupAws#orientation}
  */
  readonly orientation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#persist_block_devices ElastigroupAws#persist_block_devices}
  */
  readonly persistBlockDevices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#persist_private_ip ElastigroupAws#persist_private_ip}
  */
  readonly persistPrivateIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#persist_root_device ElastigroupAws#persist_root_device}
  */
  readonly persistRootDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#placement_tenancy ElastigroupAws#placement_tenancy}
  */
  readonly placementTenancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#preferred_availability_zones ElastigroupAws#preferred_availability_zones}
  */
  readonly preferredAvailabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#private_ips ElastigroupAws#private_ips}
  */
  readonly privateIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#product ElastigroupAws#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#region ElastigroupAws#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#security_groups ElastigroupAws#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#shutdown_script ElastigroupAws#shutdown_script}
  */
  readonly shutdownScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#spot_percentage ElastigroupAws#spot_percentage}
  */
  readonly spotPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#subnet_ids ElastigroupAws#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#target_group_arns ElastigroupAws#target_group_arns}
  */
  readonly targetGroupArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#user_data ElastigroupAws#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#utilize_commitments ElastigroupAws#utilize_commitments}
  */
  readonly utilizeCommitments?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#utilize_reserved_instances ElastigroupAws#utilize_reserved_instances}
  */
  readonly utilizeReservedInstances?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#wait_for_capacity ElastigroupAws#wait_for_capacity}
  */
  readonly waitForCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#wait_for_capacity_timeout ElastigroupAws#wait_for_capacity_timeout}
  */
  readonly waitForCapacityTimeout?: number;
  /**
  * cpu_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#cpu_options ElastigroupAws#cpu_options}
  */
  readonly cpuOptions?: ElastigroupAwsCpuOptions;
  /**
  * ebs_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#ebs_block_device ElastigroupAws#ebs_block_device}
  */
  readonly ebsBlockDevice?: ElastigroupAwsEbsBlockDevice[] | cdktf.IResolvable;
  /**
  * ephemeral_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#ephemeral_block_device ElastigroupAws#ephemeral_block_device}
  */
  readonly ephemeralBlockDevice?: ElastigroupAwsEphemeralBlockDevice[] | cdktf.IResolvable;
  /**
  * instance_types_weights block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#instance_types_weights ElastigroupAws#instance_types_weights}
  */
  readonly instanceTypesWeights?: ElastigroupAwsInstanceTypesWeights[] | cdktf.IResolvable;
  /**
  * integration_beanstalk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#integration_beanstalk ElastigroupAws#integration_beanstalk}
  */
  readonly integrationBeanstalk?: ElastigroupAwsIntegrationBeanstalk;
  /**
  * integration_codedeploy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#integration_codedeploy ElastigroupAws#integration_codedeploy}
  */
  readonly integrationCodedeploy?: ElastigroupAwsIntegrationCodedeploy;
  /**
  * integration_docker_swarm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#integration_docker_swarm ElastigroupAws#integration_docker_swarm}
  */
  readonly integrationDockerSwarm?: ElastigroupAwsIntegrationDockerSwarm;
  /**
  * integration_ecs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#integration_ecs ElastigroupAws#integration_ecs}
  */
  readonly integrationEcs?: ElastigroupAwsIntegrationEcs;
  /**
  * integration_gitlab block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#integration_gitlab ElastigroupAws#integration_gitlab}
  */
  readonly integrationGitlab?: ElastigroupAwsIntegrationGitlab;
  /**
  * integration_kubernetes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#integration_kubernetes ElastigroupAws#integration_kubernetes}
  */
  readonly integrationKubernetes?: ElastigroupAwsIntegrationKubernetes;
  /**
  * integration_mesosphere block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#integration_mesosphere ElastigroupAws#integration_mesosphere}
  */
  readonly integrationMesosphere?: ElastigroupAwsIntegrationMesosphere;
  /**
  * integration_multai_runtime block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#integration_multai_runtime ElastigroupAws#integration_multai_runtime}
  */
  readonly integrationMultaiRuntime?: ElastigroupAwsIntegrationMultaiRuntime;
  /**
  * integration_nomad block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#integration_nomad ElastigroupAws#integration_nomad}
  */
  readonly integrationNomad?: ElastigroupAwsIntegrationNomad;
  /**
  * integration_rancher block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#integration_rancher ElastigroupAws#integration_rancher}
  */
  readonly integrationRancher?: ElastigroupAwsIntegrationRancher;
  /**
  * integration_route53 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#integration_route53 ElastigroupAws#integration_route53}
  */
  readonly integrationRoute53?: ElastigroupAwsIntegrationRoute53;
  /**
  * itf block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#itf ElastigroupAws#itf}
  */
  readonly itf?: ElastigroupAwsItf[] | cdktf.IResolvable;
  /**
  * metadata_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#metadata_options ElastigroupAws#metadata_options}
  */
  readonly metadataOptions?: ElastigroupAwsMetadataOptions;
  /**
  * multai_target_sets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#multai_target_sets ElastigroupAws#multai_target_sets}
  */
  readonly multaiTargetSets?: ElastigroupAwsMultaiTargetSets[] | cdktf.IResolvable;
  /**
  * multiple_metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#multiple_metrics ElastigroupAws#multiple_metrics}
  */
  readonly multipleMetrics?: ElastigroupAwsMultipleMetrics;
  /**
  * network_interface block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#network_interface ElastigroupAws#network_interface}
  */
  readonly networkInterface?: ElastigroupAwsNetworkInterface[] | cdktf.IResolvable;
  /**
  * resource_tag_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#resource_tag_specification ElastigroupAws#resource_tag_specification}
  */
  readonly resourceTagSpecification?: ElastigroupAwsResourceTagSpecification[] | cdktf.IResolvable;
  /**
  * revert_to_spot block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#revert_to_spot ElastigroupAws#revert_to_spot}
  */
  readonly revertToSpot?: ElastigroupAwsRevertToSpot;
  /**
  * scaling_down_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#scaling_down_policy ElastigroupAws#scaling_down_policy}
  */
  readonly scalingDownPolicy?: ElastigroupAwsScalingDownPolicy[] | cdktf.IResolvable;
  /**
  * scaling_strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#scaling_strategy ElastigroupAws#scaling_strategy}
  */
  readonly scalingStrategy?: ElastigroupAwsScalingStrategy[] | cdktf.IResolvable;
  /**
  * scaling_target_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#scaling_target_policy ElastigroupAws#scaling_target_policy}
  */
  readonly scalingTargetPolicy?: ElastigroupAwsScalingTargetPolicy[] | cdktf.IResolvable;
  /**
  * scaling_up_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#scaling_up_policy ElastigroupAws#scaling_up_policy}
  */
  readonly scalingUpPolicy?: ElastigroupAwsScalingUpPolicy[] | cdktf.IResolvable;
  /**
  * scheduled_task block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#scheduled_task ElastigroupAws#scheduled_task}
  */
  readonly scheduledTask?: ElastigroupAwsScheduledTask[] | cdktf.IResolvable;
  /**
  * signal block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#signal ElastigroupAws#signal}
  */
  readonly signal?: ElastigroupAwsSignal[] | cdktf.IResolvable;
  /**
  * stateful_deallocation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#stateful_deallocation ElastigroupAws#stateful_deallocation}
  */
  readonly statefulDeallocation?: ElastigroupAwsStatefulDeallocation;
  /**
  * stateful_instance_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#stateful_instance_action ElastigroupAws#stateful_instance_action}
  */
  readonly statefulInstanceAction?: ElastigroupAwsStatefulInstanceAction[] | cdktf.IResolvable;
  /**
  * tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#tags ElastigroupAws#tags}
  */
  readonly tags?: ElastigroupAwsTags[] | cdktf.IResolvable;
  /**
  * update_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#update_policy ElastigroupAws#update_policy}
  */
  readonly updatePolicy?: ElastigroupAwsUpdatePolicy;
}
export interface ElastigroupAwsCpuOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#threads_per_core ElastigroupAws#threads_per_core}
  */
  readonly threadsPerCore: number;
}

export function elastigroupAwsCpuOptionsToTerraform(struct?: ElastigroupAwsCpuOptionsOutputReference | ElastigroupAwsCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
  }
}

export class ElastigroupAwsCpuOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsCpuOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCore = this._threadsPerCore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsCpuOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threadsPerCore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threadsPerCore = value.threadsPerCore;
    }
  }

  // threads_per_core - computed: false, optional: false, required: true
  private _threadsPerCore?: number; 
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number) {
    this._threadsPerCore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore;
  }
}
export interface ElastigroupAwsEbsBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#delete_on_termination ElastigroupAws#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#device_name ElastigroupAws#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#encrypted ElastigroupAws#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#iops ElastigroupAws#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#kms_key_id ElastigroupAws#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#snapshot_id ElastigroupAws#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#throughput ElastigroupAws#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#volume_size ElastigroupAws#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#volume_type ElastigroupAws#volume_type}
  */
  readonly volumeType?: string;
}

export function elastigroupAwsEbsBlockDeviceToTerraform(struct?: ElastigroupAwsEbsBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface ElastigroupAwsEphemeralBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#device_name ElastigroupAws#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#virtual_name ElastigroupAws#virtual_name}
  */
  readonly virtualName: string;
}

export function elastigroupAwsEphemeralBlockDeviceToTerraform(struct?: ElastigroupAwsEphemeralBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}

export interface ElastigroupAwsInstanceTypesWeights {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#instance_type ElastigroupAws#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#weight ElastigroupAws#weight}
  */
  readonly weight: number;
}

export function elastigroupAwsInstanceTypesWeightsToTerraform(struct?: ElastigroupAwsInstanceTypesWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#action ElastigroupAws#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#should_drain_instances ElastigroupAws#should_drain_instances}
  */
  readonly shouldDrainInstances?: boolean | cdktf.IResolvable;
}

export function elastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategyToTerraform(struct?: ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategyOutputReference | ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    should_drain_instances: cdktf.booleanToTerraform(struct!.shouldDrainInstances),
  }
}

export class ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._shouldDrainInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDrainInstances = this._shouldDrainInstances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._shouldDrainInstances = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._shouldDrainInstances = value.shouldDrainInstances;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // should_drain_instances - computed: false, optional: true, required: false
  private _shouldDrainInstances?: boolean | cdktf.IResolvable; 
  public get shouldDrainInstances() {
    return this.getBooleanAttribute('should_drain_instances');
  }
  public set shouldDrainInstances(value: boolean | cdktf.IResolvable) {
    this._shouldDrainInstances = value;
  }
  public resetShouldDrainInstances() {
    this._shouldDrainInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDrainInstancesInput() {
    return this._shouldDrainInstances;
  }
}
export interface ElastigroupAwsIntegrationBeanstalkDeploymentPreferences {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#automatic_roll ElastigroupAws#automatic_roll}
  */
  readonly automaticRoll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#batch_size_percentage ElastigroupAws#batch_size_percentage}
  */
  readonly batchSizePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#grace_period ElastigroupAws#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#strategy ElastigroupAws#strategy}
  */
  readonly strategy?: ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategy;
}

export function elastigroupAwsIntegrationBeanstalkDeploymentPreferencesToTerraform(struct?: ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesOutputReference | ElastigroupAwsIntegrationBeanstalkDeploymentPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_roll: cdktf.booleanToTerraform(struct!.automaticRoll),
    batch_size_percentage: cdktf.numberToTerraform(struct!.batchSizePercentage),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    strategy: elastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategyToTerraform(struct!.strategy),
  }
}

export class ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationBeanstalkDeploymentPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticRoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticRoll = this._automaticRoll;
    }
    if (this._batchSizePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizePercentage = this._batchSizePercentage;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationBeanstalkDeploymentPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticRoll = undefined;
      this._batchSizePercentage = undefined;
      this._gracePeriod = undefined;
      this._strategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticRoll = value.automaticRoll;
      this._batchSizePercentage = value.batchSizePercentage;
      this._gracePeriod = value.gracePeriod;
      this._strategy.internalValue = value.strategy;
    }
  }

  // automatic_roll - computed: false, optional: true, required: false
  private _automaticRoll?: boolean | cdktf.IResolvable; 
  public get automaticRoll() {
    return this.getBooleanAttribute('automatic_roll');
  }
  public set automaticRoll(value: boolean | cdktf.IResolvable) {
    this._automaticRoll = value;
  }
  public resetAutomaticRoll() {
    this._automaticRoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticRollInput() {
    return this._automaticRoll;
  }

  // batch_size_percentage - computed: false, optional: true, required: false
  private _batchSizePercentage?: number; 
  public get batchSizePercentage() {
    return this.getNumberAttribute('batch_size_percentage');
  }
  public set batchSizePercentage(value: number) {
    this._batchSizePercentage = value;
  }
  public resetBatchSizePercentage() {
    this._batchSizePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizePercentageInput() {
    return this._batchSizePercentage;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }
}
export interface ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#perform_at ElastigroupAws#perform_at}
  */
  readonly performAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#time_window ElastigroupAws#time_window}
  */
  readonly timeWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#update_level ElastigroupAws#update_level}
  */
  readonly updateLevel?: string;
}

export function elastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdateToTerraform(struct?: ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdateOutputReference | ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perform_at: cdktf.stringToTerraform(struct!.performAt),
    time_window: cdktf.stringToTerraform(struct!.timeWindow),
    update_level: cdktf.stringToTerraform(struct!.updateLevel),
  }
}

export class ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._performAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.performAt = this._performAt;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    if (this._updateLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateLevel = this._updateLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._performAt = undefined;
      this._timeWindow = undefined;
      this._updateLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._performAt = value.performAt;
      this._timeWindow = value.timeWindow;
      this._updateLevel = value.updateLevel;
    }
  }

  // perform_at - computed: false, optional: true, required: false
  private _performAt?: string; 
  public get performAt() {
    return this.getStringAttribute('perform_at');
  }
  public set performAt(value: string) {
    this._performAt = value;
  }
  public resetPerformAt() {
    this._performAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performAtInput() {
    return this._performAt;
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow?: string; 
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
  public set timeWindow(value: string) {
    this._timeWindow = value;
  }
  public resetTimeWindow() {
    this._timeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }

  // update_level - computed: false, optional: true, required: false
  private _updateLevel?: string; 
  public get updateLevel() {
    return this.getStringAttribute('update_level');
  }
  public set updateLevel(value: string) {
    this._updateLevel = value;
  }
  public resetUpdateLevel() {
    this._updateLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateLevelInput() {
    return this._updateLevel;
  }
}
export interface ElastigroupAwsIntegrationBeanstalkManagedActions {
  /**
  * platform_update block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#platform_update ElastigroupAws#platform_update}
  */
  readonly platformUpdate?: ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdate;
}

export function elastigroupAwsIntegrationBeanstalkManagedActionsToTerraform(struct?: ElastigroupAwsIntegrationBeanstalkManagedActionsOutputReference | ElastigroupAwsIntegrationBeanstalkManagedActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    platform_update: elastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdateToTerraform(struct!.platformUpdate),
  }
}

export class ElastigroupAwsIntegrationBeanstalkManagedActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationBeanstalkManagedActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._platformUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformUpdate = this._platformUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationBeanstalkManagedActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._platformUpdate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._platformUpdate.internalValue = value.platformUpdate;
    }
  }

  // platform_update - computed: false, optional: true, required: false
  private _platformUpdate = new ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdateOutputReference(this, "platform_update");
  public get platformUpdate() {
    return this._platformUpdate;
  }
  public putPlatformUpdate(value: ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdate) {
    this._platformUpdate.internalValue = value;
  }
  public resetPlatformUpdate() {
    this._platformUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformUpdateInput() {
    return this._platformUpdate.internalValue;
  }
}
export interface ElastigroupAwsIntegrationBeanstalk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#environment_id ElastigroupAws#environment_id}
  */
  readonly environmentId?: string;
  /**
  * deployment_preferences block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#deployment_preferences ElastigroupAws#deployment_preferences}
  */
  readonly deploymentPreferences?: ElastigroupAwsIntegrationBeanstalkDeploymentPreferences;
  /**
  * managed_actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#managed_actions ElastigroupAws#managed_actions}
  */
  readonly managedActions?: ElastigroupAwsIntegrationBeanstalkManagedActions;
}

export function elastigroupAwsIntegrationBeanstalkToTerraform(struct?: ElastigroupAwsIntegrationBeanstalkOutputReference | ElastigroupAwsIntegrationBeanstalk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_id: cdktf.stringToTerraform(struct!.environmentId),
    deployment_preferences: elastigroupAwsIntegrationBeanstalkDeploymentPreferencesToTerraform(struct!.deploymentPreferences),
    managed_actions: elastigroupAwsIntegrationBeanstalkManagedActionsToTerraform(struct!.managedActions),
  }
}

export class ElastigroupAwsIntegrationBeanstalkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationBeanstalk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    if (this._deploymentPreferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentPreferences = this._deploymentPreferences?.internalValue;
    }
    if (this._managedActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedActions = this._managedActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationBeanstalk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._environmentId = undefined;
      this._deploymentPreferences.internalValue = undefined;
      this._managedActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._environmentId = value.environmentId;
      this._deploymentPreferences.internalValue = value.deploymentPreferences;
      this._managedActions.internalValue = value.managedActions;
    }
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // deployment_preferences - computed: false, optional: true, required: false
  private _deploymentPreferences = new ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesOutputReference(this, "deployment_preferences");
  public get deploymentPreferences() {
    return this._deploymentPreferences;
  }
  public putDeploymentPreferences(value: ElastigroupAwsIntegrationBeanstalkDeploymentPreferences) {
    this._deploymentPreferences.internalValue = value;
  }
  public resetDeploymentPreferences() {
    this._deploymentPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentPreferencesInput() {
    return this._deploymentPreferences.internalValue;
  }

  // managed_actions - computed: false, optional: true, required: false
  private _managedActions = new ElastigroupAwsIntegrationBeanstalkManagedActionsOutputReference(this, "managed_actions");
  public get managedActions() {
    return this._managedActions;
  }
  public putManagedActions(value: ElastigroupAwsIntegrationBeanstalkManagedActions) {
    this._managedActions.internalValue = value;
  }
  public resetManagedActions() {
    this._managedActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedActionsInput() {
    return this._managedActions.internalValue;
  }
}
export interface ElastigroupAwsIntegrationCodedeployDeploymentGroups {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#application_name ElastigroupAws#application_name}
  */
  readonly applicationName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#deployment_group_name ElastigroupAws#deployment_group_name}
  */
  readonly deploymentGroupName: string;
}

export function elastigroupAwsIntegrationCodedeployDeploymentGroupsToTerraform(struct?: ElastigroupAwsIntegrationCodedeployDeploymentGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.stringToTerraform(struct!.applicationName),
    deployment_group_name: cdktf.stringToTerraform(struct!.deploymentGroupName),
  }
}

export interface ElastigroupAwsIntegrationCodedeploy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#cleanup_on_failure ElastigroupAws#cleanup_on_failure}
  */
  readonly cleanupOnFailure: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#terminate_instance_on_failure ElastigroupAws#terminate_instance_on_failure}
  */
  readonly terminateInstanceOnFailure: boolean | cdktf.IResolvable;
  /**
  * deployment_groups block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#deployment_groups ElastigroupAws#deployment_groups}
  */
  readonly deploymentGroups: ElastigroupAwsIntegrationCodedeployDeploymentGroups[] | cdktf.IResolvable;
}

export function elastigroupAwsIntegrationCodedeployToTerraform(struct?: ElastigroupAwsIntegrationCodedeployOutputReference | ElastigroupAwsIntegrationCodedeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_on_failure: cdktf.booleanToTerraform(struct!.cleanupOnFailure),
    terminate_instance_on_failure: cdktf.booleanToTerraform(struct!.terminateInstanceOnFailure),
    deployment_groups: cdktf.listMapper(elastigroupAwsIntegrationCodedeployDeploymentGroupsToTerraform)(struct!.deploymentGroups),
  }
}

export class ElastigroupAwsIntegrationCodedeployOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationCodedeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupOnFailure = this._cleanupOnFailure;
    }
    if (this._terminateInstanceOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminateInstanceOnFailure = this._terminateInstanceOnFailure;
    }
    if (this._deploymentGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentGroups = this._deploymentGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationCodedeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cleanupOnFailure = undefined;
      this._terminateInstanceOnFailure = undefined;
      this._deploymentGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cleanupOnFailure = value.cleanupOnFailure;
      this._terminateInstanceOnFailure = value.terminateInstanceOnFailure;
      this._deploymentGroups = value.deploymentGroups;
    }
  }

  // cleanup_on_failure - computed: false, optional: false, required: true
  private _cleanupOnFailure?: boolean | cdktf.IResolvable; 
  public get cleanupOnFailure() {
    return this.getBooleanAttribute('cleanup_on_failure');
  }
  public set cleanupOnFailure(value: boolean | cdktf.IResolvable) {
    this._cleanupOnFailure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupOnFailureInput() {
    return this._cleanupOnFailure;
  }

  // terminate_instance_on_failure - computed: false, optional: false, required: true
  private _terminateInstanceOnFailure?: boolean | cdktf.IResolvable; 
  public get terminateInstanceOnFailure() {
    return this.getBooleanAttribute('terminate_instance_on_failure');
  }
  public set terminateInstanceOnFailure(value: boolean | cdktf.IResolvable) {
    this._terminateInstanceOnFailure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateInstanceOnFailureInput() {
    return this._terminateInstanceOnFailure;
  }

  // deployment_groups - computed: false, optional: false, required: true
  private _deploymentGroups?: ElastigroupAwsIntegrationCodedeployDeploymentGroups[] | cdktf.IResolvable; 
  public get deploymentGroups() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('deployment_groups')));
  }
  public set deploymentGroups(value: ElastigroupAwsIntegrationCodedeployDeploymentGroups[] | cdktf.IResolvable) {
    this._deploymentGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentGroupsInput() {
    return this._deploymentGroups;
  }
}
export interface ElastigroupAwsIntegrationDockerSwarmAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#evaluation_periods ElastigroupAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#max_scale_down_percentage ElastigroupAws#max_scale_down_percentage}
  */
  readonly maxScaleDownPercentage?: number;
}

export function elastigroupAwsIntegrationDockerSwarmAutoscaleDownToTerraform(struct?: ElastigroupAwsIntegrationDockerSwarmAutoscaleDownOutputReference | ElastigroupAwsIntegrationDockerSwarmAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_scale_down_percentage: cdktf.numberToTerraform(struct!.maxScaleDownPercentage),
  }
}

export class ElastigroupAwsIntegrationDockerSwarmAutoscaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationDockerSwarmAutoscaleDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    if (this._maxScaleDownPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScaleDownPercentage = this._maxScaleDownPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationDockerSwarmAutoscaleDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluationPeriods = undefined;
      this._maxScaleDownPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluationPeriods = value.evaluationPeriods;
      this._maxScaleDownPercentage = value.maxScaleDownPercentage;
    }
  }

  // evaluation_periods - computed: false, optional: true, required: false
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  public resetEvaluationPeriods() {
    this._evaluationPeriods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
  }

  // max_scale_down_percentage - computed: false, optional: true, required: false
  private _maxScaleDownPercentage?: number; 
  public get maxScaleDownPercentage() {
    return this.getNumberAttribute('max_scale_down_percentage');
  }
  public set maxScaleDownPercentage(value: number) {
    this._maxScaleDownPercentage = value;
  }
  public resetMaxScaleDownPercentage() {
    this._maxScaleDownPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaleDownPercentageInput() {
    return this._maxScaleDownPercentage;
  }
}
export interface ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroom {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#cpu_per_unit ElastigroupAws#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#memory_per_unit ElastigroupAws#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#num_of_units ElastigroupAws#num_of_units}
  */
  readonly numOfUnits?: number;
}

export function elastigroupAwsIntegrationDockerSwarmAutoscaleHeadroomToTerraform(struct?: ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroomOutputReference | ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_per_unit: cdktf.numberToTerraform(struct!.cpuPerUnit),
    memory_per_unit: cdktf.numberToTerraform(struct!.memoryPerUnit),
    num_of_units: cdktf.numberToTerraform(struct!.numOfUnits),
  }
}

export class ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPerUnit = this._cpuPerUnit;
    }
    if (this._memoryPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryPerUnit = this._memoryPerUnit;
    }
    if (this._numOfUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfUnits = this._numOfUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuPerUnit = undefined;
      this._memoryPerUnit = undefined;
      this._numOfUnits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuPerUnit = value.cpuPerUnit;
      this._memoryPerUnit = value.memoryPerUnit;
      this._numOfUnits = value.numOfUnits;
    }
  }

  // cpu_per_unit - computed: false, optional: true, required: false
  private _cpuPerUnit?: number; 
  public get cpuPerUnit() {
    return this.getNumberAttribute('cpu_per_unit');
  }
  public set cpuPerUnit(value: number) {
    this._cpuPerUnit = value;
  }
  public resetCpuPerUnit() {
    this._cpuPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPerUnitInput() {
    return this._cpuPerUnit;
  }

  // memory_per_unit - computed: false, optional: true, required: false
  private _memoryPerUnit?: number; 
  public get memoryPerUnit() {
    return this.getNumberAttribute('memory_per_unit');
  }
  public set memoryPerUnit(value: number) {
    this._memoryPerUnit = value;
  }
  public resetMemoryPerUnit() {
    this._memoryPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryPerUnitInput() {
    return this._memoryPerUnit;
  }

  // num_of_units - computed: false, optional: true, required: false
  private _numOfUnits?: number; 
  public get numOfUnits() {
    return this.getNumberAttribute('num_of_units');
  }
  public set numOfUnits(value: number) {
    this._numOfUnits = value;
  }
  public resetNumOfUnits() {
    this._numOfUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfUnitsInput() {
    return this._numOfUnits;
  }
}
export interface ElastigroupAwsIntegrationDockerSwarm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_cooldown ElastigroupAws#autoscale_cooldown}
  */
  readonly autoscaleCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_is_enabled ElastigroupAws#autoscale_is_enabled}
  */
  readonly autoscaleIsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#master_host ElastigroupAws#master_host}
  */
  readonly masterHost: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#master_port ElastigroupAws#master_port}
  */
  readonly masterPort: number;
  /**
  * autoscale_down block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_down ElastigroupAws#autoscale_down}
  */
  readonly autoscaleDown?: ElastigroupAwsIntegrationDockerSwarmAutoscaleDown;
  /**
  * autoscale_headroom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_headroom ElastigroupAws#autoscale_headroom}
  */
  readonly autoscaleHeadroom?: ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroom;
}

export function elastigroupAwsIntegrationDockerSwarmToTerraform(struct?: ElastigroupAwsIntegrationDockerSwarmOutputReference | ElastigroupAwsIntegrationDockerSwarm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale_cooldown: cdktf.numberToTerraform(struct!.autoscaleCooldown),
    autoscale_is_enabled: cdktf.booleanToTerraform(struct!.autoscaleIsEnabled),
    master_host: cdktf.stringToTerraform(struct!.masterHost),
    master_port: cdktf.numberToTerraform(struct!.masterPort),
    autoscale_down: elastigroupAwsIntegrationDockerSwarmAutoscaleDownToTerraform(struct!.autoscaleDown),
    autoscale_headroom: elastigroupAwsIntegrationDockerSwarmAutoscaleHeadroomToTerraform(struct!.autoscaleHeadroom),
  }
}

export class ElastigroupAwsIntegrationDockerSwarmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationDockerSwarm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaleCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleCooldown = this._autoscaleCooldown;
    }
    if (this._autoscaleIsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleIsEnabled = this._autoscaleIsEnabled;
    }
    if (this._masterHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterHost = this._masterHost;
    }
    if (this._masterPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPort = this._masterPort;
    }
    if (this._autoscaleDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleDown = this._autoscaleDown?.internalValue;
    }
    if (this._autoscaleHeadroom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleHeadroom = this._autoscaleHeadroom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationDockerSwarm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscaleCooldown = undefined;
      this._autoscaleIsEnabled = undefined;
      this._masterHost = undefined;
      this._masterPort = undefined;
      this._autoscaleDown.internalValue = undefined;
      this._autoscaleHeadroom.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscaleCooldown = value.autoscaleCooldown;
      this._autoscaleIsEnabled = value.autoscaleIsEnabled;
      this._masterHost = value.masterHost;
      this._masterPort = value.masterPort;
      this._autoscaleDown.internalValue = value.autoscaleDown;
      this._autoscaleHeadroom.internalValue = value.autoscaleHeadroom;
    }
  }

  // autoscale_cooldown - computed: false, optional: true, required: false
  private _autoscaleCooldown?: number; 
  public get autoscaleCooldown() {
    return this.getNumberAttribute('autoscale_cooldown');
  }
  public set autoscaleCooldown(value: number) {
    this._autoscaleCooldown = value;
  }
  public resetAutoscaleCooldown() {
    this._autoscaleCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleCooldownInput() {
    return this._autoscaleCooldown;
  }

  // autoscale_is_enabled - computed: false, optional: true, required: false
  private _autoscaleIsEnabled?: boolean | cdktf.IResolvable; 
  public get autoscaleIsEnabled() {
    return this.getBooleanAttribute('autoscale_is_enabled');
  }
  public set autoscaleIsEnabled(value: boolean | cdktf.IResolvable) {
    this._autoscaleIsEnabled = value;
  }
  public resetAutoscaleIsEnabled() {
    this._autoscaleIsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleIsEnabledInput() {
    return this._autoscaleIsEnabled;
  }

  // master_host - computed: false, optional: false, required: true
  private _masterHost?: string; 
  public get masterHost() {
    return this.getStringAttribute('master_host');
  }
  public set masterHost(value: string) {
    this._masterHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterHostInput() {
    return this._masterHost;
  }

  // master_port - computed: false, optional: false, required: true
  private _masterPort?: number; 
  public get masterPort() {
    return this.getNumberAttribute('master_port');
  }
  public set masterPort(value: number) {
    this._masterPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPortInput() {
    return this._masterPort;
  }

  // autoscale_down - computed: false, optional: true, required: false
  private _autoscaleDown = new ElastigroupAwsIntegrationDockerSwarmAutoscaleDownOutputReference(this, "autoscale_down");
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: ElastigroupAwsIntegrationDockerSwarmAutoscaleDown) {
    this._autoscaleDown.internalValue = value;
  }
  public resetAutoscaleDown() {
    this._autoscaleDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleDownInput() {
    return this._autoscaleDown.internalValue;
  }

  // autoscale_headroom - computed: false, optional: true, required: false
  private _autoscaleHeadroom = new ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroomOutputReference(this, "autoscale_headroom");
  public get autoscaleHeadroom() {
    return this._autoscaleHeadroom;
  }
  public putAutoscaleHeadroom(value: ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroom) {
    this._autoscaleHeadroom.internalValue = value;
  }
  public resetAutoscaleHeadroom() {
    this._autoscaleHeadroom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleHeadroomInput() {
    return this._autoscaleHeadroom.internalValue;
  }
}
export interface ElastigroupAwsIntegrationEcsAutoscaleAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#key ElastigroupAws#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#value ElastigroupAws#value}
  */
  readonly value: string;
}

export function elastigroupAwsIntegrationEcsAutoscaleAttributesToTerraform(struct?: ElastigroupAwsIntegrationEcsAutoscaleAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupAwsIntegrationEcsAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#evaluation_periods ElastigroupAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#max_scale_down_percentage ElastigroupAws#max_scale_down_percentage}
  */
  readonly maxScaleDownPercentage?: number;
}

export function elastigroupAwsIntegrationEcsAutoscaleDownToTerraform(struct?: ElastigroupAwsIntegrationEcsAutoscaleDownOutputReference | ElastigroupAwsIntegrationEcsAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_scale_down_percentage: cdktf.numberToTerraform(struct!.maxScaleDownPercentage),
  }
}

export class ElastigroupAwsIntegrationEcsAutoscaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationEcsAutoscaleDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    if (this._maxScaleDownPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScaleDownPercentage = this._maxScaleDownPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationEcsAutoscaleDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluationPeriods = undefined;
      this._maxScaleDownPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluationPeriods = value.evaluationPeriods;
      this._maxScaleDownPercentage = value.maxScaleDownPercentage;
    }
  }

  // evaluation_periods - computed: false, optional: true, required: false
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  public resetEvaluationPeriods() {
    this._evaluationPeriods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
  }

  // max_scale_down_percentage - computed: false, optional: true, required: false
  private _maxScaleDownPercentage?: number; 
  public get maxScaleDownPercentage() {
    return this.getNumberAttribute('max_scale_down_percentage');
  }
  public set maxScaleDownPercentage(value: number) {
    this._maxScaleDownPercentage = value;
  }
  public resetMaxScaleDownPercentage() {
    this._maxScaleDownPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaleDownPercentageInput() {
    return this._maxScaleDownPercentage;
  }
}
export interface ElastigroupAwsIntegrationEcsAutoscaleHeadroom {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#cpu_per_unit ElastigroupAws#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#memory_per_unit ElastigroupAws#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#num_of_units ElastigroupAws#num_of_units}
  */
  readonly numOfUnits?: number;
}

export function elastigroupAwsIntegrationEcsAutoscaleHeadroomToTerraform(struct?: ElastigroupAwsIntegrationEcsAutoscaleHeadroomOutputReference | ElastigroupAwsIntegrationEcsAutoscaleHeadroom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_per_unit: cdktf.numberToTerraform(struct!.cpuPerUnit),
    memory_per_unit: cdktf.numberToTerraform(struct!.memoryPerUnit),
    num_of_units: cdktf.numberToTerraform(struct!.numOfUnits),
  }
}

export class ElastigroupAwsIntegrationEcsAutoscaleHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationEcsAutoscaleHeadroom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPerUnit = this._cpuPerUnit;
    }
    if (this._memoryPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryPerUnit = this._memoryPerUnit;
    }
    if (this._numOfUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfUnits = this._numOfUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationEcsAutoscaleHeadroom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuPerUnit = undefined;
      this._memoryPerUnit = undefined;
      this._numOfUnits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuPerUnit = value.cpuPerUnit;
      this._memoryPerUnit = value.memoryPerUnit;
      this._numOfUnits = value.numOfUnits;
    }
  }

  // cpu_per_unit - computed: false, optional: true, required: false
  private _cpuPerUnit?: number; 
  public get cpuPerUnit() {
    return this.getNumberAttribute('cpu_per_unit');
  }
  public set cpuPerUnit(value: number) {
    this._cpuPerUnit = value;
  }
  public resetCpuPerUnit() {
    this._cpuPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPerUnitInput() {
    return this._cpuPerUnit;
  }

  // memory_per_unit - computed: false, optional: true, required: false
  private _memoryPerUnit?: number; 
  public get memoryPerUnit() {
    return this.getNumberAttribute('memory_per_unit');
  }
  public set memoryPerUnit(value: number) {
    this._memoryPerUnit = value;
  }
  public resetMemoryPerUnit() {
    this._memoryPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryPerUnitInput() {
    return this._memoryPerUnit;
  }

  // num_of_units - computed: false, optional: true, required: false
  private _numOfUnits?: number; 
  public get numOfUnits() {
    return this.getNumberAttribute('num_of_units');
  }
  public set numOfUnits(value: number) {
    this._numOfUnits = value;
  }
  public resetNumOfUnits() {
    this._numOfUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfUnitsInput() {
    return this._numOfUnits;
  }
}
export interface ElastigroupAwsIntegrationEcsBatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#job_queue_names ElastigroupAws#job_queue_names}
  */
  readonly jobQueueNames: string[];
}

export function elastigroupAwsIntegrationEcsBatchToTerraform(struct?: ElastigroupAwsIntegrationEcsBatchOutputReference | ElastigroupAwsIntegrationEcsBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_queue_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jobQueueNames),
  }
}

export class ElastigroupAwsIntegrationEcsBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationEcsBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobQueueNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobQueueNames = this._jobQueueNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationEcsBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobQueueNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobQueueNames = value.jobQueueNames;
    }
  }

  // job_queue_names - computed: false, optional: false, required: true
  private _jobQueueNames?: string[]; 
  public get jobQueueNames() {
    return this.getListAttribute('job_queue_names');
  }
  public set jobQueueNames(value: string[]) {
    this._jobQueueNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobQueueNamesInput() {
    return this._jobQueueNames;
  }
}
export interface ElastigroupAwsIntegrationEcs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_cooldown ElastigroupAws#autoscale_cooldown}
  */
  readonly autoscaleCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_is_auto_config ElastigroupAws#autoscale_is_auto_config}
  */
  readonly autoscaleIsAutoConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_is_enabled ElastigroupAws#autoscale_is_enabled}
  */
  readonly autoscaleIsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_scale_down_non_service_tasks ElastigroupAws#autoscale_scale_down_non_service_tasks}
  */
  readonly autoscaleScaleDownNonServiceTasks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#cluster_name ElastigroupAws#cluster_name}
  */
  readonly clusterName: string;
  /**
  * autoscale_attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_attributes ElastigroupAws#autoscale_attributes}
  */
  readonly autoscaleAttributes?: ElastigroupAwsIntegrationEcsAutoscaleAttributes[] | cdktf.IResolvable;
  /**
  * autoscale_down block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_down ElastigroupAws#autoscale_down}
  */
  readonly autoscaleDown?: ElastigroupAwsIntegrationEcsAutoscaleDown;
  /**
  * autoscale_headroom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_headroom ElastigroupAws#autoscale_headroom}
  */
  readonly autoscaleHeadroom?: ElastigroupAwsIntegrationEcsAutoscaleHeadroom;
  /**
  * batch block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#batch ElastigroupAws#batch}
  */
  readonly batch?: ElastigroupAwsIntegrationEcsBatch;
}

export function elastigroupAwsIntegrationEcsToTerraform(struct?: ElastigroupAwsIntegrationEcsOutputReference | ElastigroupAwsIntegrationEcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale_cooldown: cdktf.numberToTerraform(struct!.autoscaleCooldown),
    autoscale_is_auto_config: cdktf.booleanToTerraform(struct!.autoscaleIsAutoConfig),
    autoscale_is_enabled: cdktf.booleanToTerraform(struct!.autoscaleIsEnabled),
    autoscale_scale_down_non_service_tasks: cdktf.booleanToTerraform(struct!.autoscaleScaleDownNonServiceTasks),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    autoscale_attributes: cdktf.listMapper(elastigroupAwsIntegrationEcsAutoscaleAttributesToTerraform)(struct!.autoscaleAttributes),
    autoscale_down: elastigroupAwsIntegrationEcsAutoscaleDownToTerraform(struct!.autoscaleDown),
    autoscale_headroom: elastigroupAwsIntegrationEcsAutoscaleHeadroomToTerraform(struct!.autoscaleHeadroom),
    batch: elastigroupAwsIntegrationEcsBatchToTerraform(struct!.batch),
  }
}

export class ElastigroupAwsIntegrationEcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationEcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaleCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleCooldown = this._autoscaleCooldown;
    }
    if (this._autoscaleIsAutoConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleIsAutoConfig = this._autoscaleIsAutoConfig;
    }
    if (this._autoscaleIsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleIsEnabled = this._autoscaleIsEnabled;
    }
    if (this._autoscaleScaleDownNonServiceTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleScaleDownNonServiceTasks = this._autoscaleScaleDownNonServiceTasks;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._autoscaleAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleAttributes = this._autoscaleAttributes;
    }
    if (this._autoscaleDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleDown = this._autoscaleDown?.internalValue;
    }
    if (this._autoscaleHeadroom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleHeadroom = this._autoscaleHeadroom?.internalValue;
    }
    if (this._batch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationEcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscaleCooldown = undefined;
      this._autoscaleIsAutoConfig = undefined;
      this._autoscaleIsEnabled = undefined;
      this._autoscaleScaleDownNonServiceTasks = undefined;
      this._clusterName = undefined;
      this._autoscaleAttributes = undefined;
      this._autoscaleDown.internalValue = undefined;
      this._autoscaleHeadroom.internalValue = undefined;
      this._batch.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscaleCooldown = value.autoscaleCooldown;
      this._autoscaleIsAutoConfig = value.autoscaleIsAutoConfig;
      this._autoscaleIsEnabled = value.autoscaleIsEnabled;
      this._autoscaleScaleDownNonServiceTasks = value.autoscaleScaleDownNonServiceTasks;
      this._clusterName = value.clusterName;
      this._autoscaleAttributes = value.autoscaleAttributes;
      this._autoscaleDown.internalValue = value.autoscaleDown;
      this._autoscaleHeadroom.internalValue = value.autoscaleHeadroom;
      this._batch.internalValue = value.batch;
    }
  }

  // autoscale_cooldown - computed: false, optional: true, required: false
  private _autoscaleCooldown?: number; 
  public get autoscaleCooldown() {
    return this.getNumberAttribute('autoscale_cooldown');
  }
  public set autoscaleCooldown(value: number) {
    this._autoscaleCooldown = value;
  }
  public resetAutoscaleCooldown() {
    this._autoscaleCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleCooldownInput() {
    return this._autoscaleCooldown;
  }

  // autoscale_is_auto_config - computed: false, optional: true, required: false
  private _autoscaleIsAutoConfig?: boolean | cdktf.IResolvable; 
  public get autoscaleIsAutoConfig() {
    return this.getBooleanAttribute('autoscale_is_auto_config');
  }
  public set autoscaleIsAutoConfig(value: boolean | cdktf.IResolvable) {
    this._autoscaleIsAutoConfig = value;
  }
  public resetAutoscaleIsAutoConfig() {
    this._autoscaleIsAutoConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleIsAutoConfigInput() {
    return this._autoscaleIsAutoConfig;
  }

  // autoscale_is_enabled - computed: false, optional: true, required: false
  private _autoscaleIsEnabled?: boolean | cdktf.IResolvable; 
  public get autoscaleIsEnabled() {
    return this.getBooleanAttribute('autoscale_is_enabled');
  }
  public set autoscaleIsEnabled(value: boolean | cdktf.IResolvable) {
    this._autoscaleIsEnabled = value;
  }
  public resetAutoscaleIsEnabled() {
    this._autoscaleIsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleIsEnabledInput() {
    return this._autoscaleIsEnabled;
  }

  // autoscale_scale_down_non_service_tasks - computed: false, optional: true, required: false
  private _autoscaleScaleDownNonServiceTasks?: boolean | cdktf.IResolvable; 
  public get autoscaleScaleDownNonServiceTasks() {
    return this.getBooleanAttribute('autoscale_scale_down_non_service_tasks');
  }
  public set autoscaleScaleDownNonServiceTasks(value: boolean | cdktf.IResolvable) {
    this._autoscaleScaleDownNonServiceTasks = value;
  }
  public resetAutoscaleScaleDownNonServiceTasks() {
    this._autoscaleScaleDownNonServiceTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleScaleDownNonServiceTasksInput() {
    return this._autoscaleScaleDownNonServiceTasks;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // autoscale_attributes - computed: false, optional: true, required: false
  private _autoscaleAttributes?: ElastigroupAwsIntegrationEcsAutoscaleAttributes[] | cdktf.IResolvable; 
  public get autoscaleAttributes() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('autoscale_attributes')));
  }
  public set autoscaleAttributes(value: ElastigroupAwsIntegrationEcsAutoscaleAttributes[] | cdktf.IResolvable) {
    this._autoscaleAttributes = value;
  }
  public resetAutoscaleAttributes() {
    this._autoscaleAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleAttributesInput() {
    return this._autoscaleAttributes;
  }

  // autoscale_down - computed: false, optional: true, required: false
  private _autoscaleDown = new ElastigroupAwsIntegrationEcsAutoscaleDownOutputReference(this, "autoscale_down");
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: ElastigroupAwsIntegrationEcsAutoscaleDown) {
    this._autoscaleDown.internalValue = value;
  }
  public resetAutoscaleDown() {
    this._autoscaleDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleDownInput() {
    return this._autoscaleDown.internalValue;
  }

  // autoscale_headroom - computed: false, optional: true, required: false
  private _autoscaleHeadroom = new ElastigroupAwsIntegrationEcsAutoscaleHeadroomOutputReference(this, "autoscale_headroom");
  public get autoscaleHeadroom() {
    return this._autoscaleHeadroom;
  }
  public putAutoscaleHeadroom(value: ElastigroupAwsIntegrationEcsAutoscaleHeadroom) {
    this._autoscaleHeadroom.internalValue = value;
  }
  public resetAutoscaleHeadroom() {
    this._autoscaleHeadroom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleHeadroomInput() {
    return this._autoscaleHeadroom.internalValue;
  }

  // batch - computed: false, optional: true, required: false
  private _batch = new ElastigroupAwsIntegrationEcsBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: ElastigroupAwsIntegrationEcsBatch) {
    this._batch.internalValue = value;
  }
  public resetBatch() {
    this._batch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch.internalValue;
  }
}
export interface ElastigroupAwsIntegrationGitlabRunner {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#is_enabled ElastigroupAws#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function elastigroupAwsIntegrationGitlabRunnerToTerraform(struct?: ElastigroupAwsIntegrationGitlabRunnerOutputReference | ElastigroupAwsIntegrationGitlabRunner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}

export class ElastigroupAwsIntegrationGitlabRunnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationGitlabRunner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationGitlabRunner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface ElastigroupAwsIntegrationGitlab {
  /**
  * runner block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#runner ElastigroupAws#runner}
  */
  readonly runner?: ElastigroupAwsIntegrationGitlabRunner;
}

export function elastigroupAwsIntegrationGitlabToTerraform(struct?: ElastigroupAwsIntegrationGitlabOutputReference | ElastigroupAwsIntegrationGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    runner: elastigroupAwsIntegrationGitlabRunnerToTerraform(struct!.runner),
  }
}

export class ElastigroupAwsIntegrationGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationGitlab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._runner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runner = this._runner?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationGitlab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._runner.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._runner.internalValue = value.runner;
    }
  }

  // runner - computed: false, optional: true, required: false
  private _runner = new ElastigroupAwsIntegrationGitlabRunnerOutputReference(this, "runner");
  public get runner() {
    return this._runner;
  }
  public putRunner(value: ElastigroupAwsIntegrationGitlabRunner) {
    this._runner.internalValue = value;
  }
  public resetRunner() {
    this._runner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerInput() {
    return this._runner.internalValue;
  }
}
export interface ElastigroupAwsIntegrationKubernetesAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#evaluation_periods ElastigroupAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
}

export function elastigroupAwsIntegrationKubernetesAutoscaleDownToTerraform(struct?: ElastigroupAwsIntegrationKubernetesAutoscaleDownOutputReference | ElastigroupAwsIntegrationKubernetesAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
  }
}

export class ElastigroupAwsIntegrationKubernetesAutoscaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationKubernetesAutoscaleDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationKubernetesAutoscaleDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluationPeriods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluationPeriods = value.evaluationPeriods;
    }
  }

  // evaluation_periods - computed: false, optional: true, required: false
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  public resetEvaluationPeriods() {
    this._evaluationPeriods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
  }
}
export interface ElastigroupAwsIntegrationKubernetesAutoscaleHeadroom {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#cpu_per_unit ElastigroupAws#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#memory_per_unit ElastigroupAws#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#num_of_units ElastigroupAws#num_of_units}
  */
  readonly numOfUnits?: number;
}

export function elastigroupAwsIntegrationKubernetesAutoscaleHeadroomToTerraform(struct?: ElastigroupAwsIntegrationKubernetesAutoscaleHeadroomOutputReference | ElastigroupAwsIntegrationKubernetesAutoscaleHeadroom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_per_unit: cdktf.numberToTerraform(struct!.cpuPerUnit),
    memory_per_unit: cdktf.numberToTerraform(struct!.memoryPerUnit),
    num_of_units: cdktf.numberToTerraform(struct!.numOfUnits),
  }
}

export class ElastigroupAwsIntegrationKubernetesAutoscaleHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationKubernetesAutoscaleHeadroom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPerUnit = this._cpuPerUnit;
    }
    if (this._memoryPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryPerUnit = this._memoryPerUnit;
    }
    if (this._numOfUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfUnits = this._numOfUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationKubernetesAutoscaleHeadroom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuPerUnit = undefined;
      this._memoryPerUnit = undefined;
      this._numOfUnits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuPerUnit = value.cpuPerUnit;
      this._memoryPerUnit = value.memoryPerUnit;
      this._numOfUnits = value.numOfUnits;
    }
  }

  // cpu_per_unit - computed: false, optional: true, required: false
  private _cpuPerUnit?: number; 
  public get cpuPerUnit() {
    return this.getNumberAttribute('cpu_per_unit');
  }
  public set cpuPerUnit(value: number) {
    this._cpuPerUnit = value;
  }
  public resetCpuPerUnit() {
    this._cpuPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPerUnitInput() {
    return this._cpuPerUnit;
  }

  // memory_per_unit - computed: false, optional: true, required: false
  private _memoryPerUnit?: number; 
  public get memoryPerUnit() {
    return this.getNumberAttribute('memory_per_unit');
  }
  public set memoryPerUnit(value: number) {
    this._memoryPerUnit = value;
  }
  public resetMemoryPerUnit() {
    this._memoryPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryPerUnitInput() {
    return this._memoryPerUnit;
  }

  // num_of_units - computed: false, optional: true, required: false
  private _numOfUnits?: number; 
  public get numOfUnits() {
    return this.getNumberAttribute('num_of_units');
  }
  public set numOfUnits(value: number) {
    this._numOfUnits = value;
  }
  public resetNumOfUnits() {
    this._numOfUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfUnitsInput() {
    return this._numOfUnits;
  }
}
export interface ElastigroupAwsIntegrationKubernetesAutoscaleLabels {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#key ElastigroupAws#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#value ElastigroupAws#value}
  */
  readonly value: string;
}

export function elastigroupAwsIntegrationKubernetesAutoscaleLabelsToTerraform(struct?: ElastigroupAwsIntegrationKubernetesAutoscaleLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupAwsIntegrationKubernetes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#api_server ElastigroupAws#api_server}
  */
  readonly apiServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_cooldown ElastigroupAws#autoscale_cooldown}
  */
  readonly autoscaleCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_is_auto_config ElastigroupAws#autoscale_is_auto_config}
  */
  readonly autoscaleIsAutoConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_is_enabled ElastigroupAws#autoscale_is_enabled}
  */
  readonly autoscaleIsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#cluster_identifier ElastigroupAws#cluster_identifier}
  */
  readonly clusterIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#integration_mode ElastigroupAws#integration_mode}
  */
  readonly integrationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#token ElastigroupAws#token}
  */
  readonly token?: string;
  /**
  * autoscale_down block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_down ElastigroupAws#autoscale_down}
  */
  readonly autoscaleDown?: ElastigroupAwsIntegrationKubernetesAutoscaleDown;
  /**
  * autoscale_headroom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_headroom ElastigroupAws#autoscale_headroom}
  */
  readonly autoscaleHeadroom?: ElastigroupAwsIntegrationKubernetesAutoscaleHeadroom;
  /**
  * autoscale_labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_labels ElastigroupAws#autoscale_labels}
  */
  readonly autoscaleLabels?: ElastigroupAwsIntegrationKubernetesAutoscaleLabels[] | cdktf.IResolvable;
}

export function elastigroupAwsIntegrationKubernetesToTerraform(struct?: ElastigroupAwsIntegrationKubernetesOutputReference | ElastigroupAwsIntegrationKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server: cdktf.stringToTerraform(struct!.apiServer),
    autoscale_cooldown: cdktf.numberToTerraform(struct!.autoscaleCooldown),
    autoscale_is_auto_config: cdktf.booleanToTerraform(struct!.autoscaleIsAutoConfig),
    autoscale_is_enabled: cdktf.booleanToTerraform(struct!.autoscaleIsEnabled),
    cluster_identifier: cdktf.stringToTerraform(struct!.clusterIdentifier),
    integration_mode: cdktf.stringToTerraform(struct!.integrationMode),
    token: cdktf.stringToTerraform(struct!.token),
    autoscale_down: elastigroupAwsIntegrationKubernetesAutoscaleDownToTerraform(struct!.autoscaleDown),
    autoscale_headroom: elastigroupAwsIntegrationKubernetesAutoscaleHeadroomToTerraform(struct!.autoscaleHeadroom),
    autoscale_labels: cdktf.listMapper(elastigroupAwsIntegrationKubernetesAutoscaleLabelsToTerraform)(struct!.autoscaleLabels),
  }
}

export class ElastigroupAwsIntegrationKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationKubernetes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServer = this._apiServer;
    }
    if (this._autoscaleCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleCooldown = this._autoscaleCooldown;
    }
    if (this._autoscaleIsAutoConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleIsAutoConfig = this._autoscaleIsAutoConfig;
    }
    if (this._autoscaleIsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleIsEnabled = this._autoscaleIsEnabled;
    }
    if (this._clusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIdentifier = this._clusterIdentifier;
    }
    if (this._integrationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationMode = this._integrationMode;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._autoscaleDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleDown = this._autoscaleDown?.internalValue;
    }
    if (this._autoscaleHeadroom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleHeadroom = this._autoscaleHeadroom?.internalValue;
    }
    if (this._autoscaleLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleLabels = this._autoscaleLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationKubernetes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiServer = undefined;
      this._autoscaleCooldown = undefined;
      this._autoscaleIsAutoConfig = undefined;
      this._autoscaleIsEnabled = undefined;
      this._clusterIdentifier = undefined;
      this._integrationMode = undefined;
      this._token = undefined;
      this._autoscaleDown.internalValue = undefined;
      this._autoscaleHeadroom.internalValue = undefined;
      this._autoscaleLabels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiServer = value.apiServer;
      this._autoscaleCooldown = value.autoscaleCooldown;
      this._autoscaleIsAutoConfig = value.autoscaleIsAutoConfig;
      this._autoscaleIsEnabled = value.autoscaleIsEnabled;
      this._clusterIdentifier = value.clusterIdentifier;
      this._integrationMode = value.integrationMode;
      this._token = value.token;
      this._autoscaleDown.internalValue = value.autoscaleDown;
      this._autoscaleHeadroom.internalValue = value.autoscaleHeadroom;
      this._autoscaleLabels = value.autoscaleLabels;
    }
  }

  // api_server - computed: false, optional: true, required: false
  private _apiServer?: string; 
  public get apiServer() {
    return this.getStringAttribute('api_server');
  }
  public set apiServer(value: string) {
    this._apiServer = value;
  }
  public resetApiServer() {
    this._apiServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerInput() {
    return this._apiServer;
  }

  // autoscale_cooldown - computed: false, optional: true, required: false
  private _autoscaleCooldown?: number; 
  public get autoscaleCooldown() {
    return this.getNumberAttribute('autoscale_cooldown');
  }
  public set autoscaleCooldown(value: number) {
    this._autoscaleCooldown = value;
  }
  public resetAutoscaleCooldown() {
    this._autoscaleCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleCooldownInput() {
    return this._autoscaleCooldown;
  }

  // autoscale_is_auto_config - computed: false, optional: true, required: false
  private _autoscaleIsAutoConfig?: boolean | cdktf.IResolvable; 
  public get autoscaleIsAutoConfig() {
    return this.getBooleanAttribute('autoscale_is_auto_config');
  }
  public set autoscaleIsAutoConfig(value: boolean | cdktf.IResolvable) {
    this._autoscaleIsAutoConfig = value;
  }
  public resetAutoscaleIsAutoConfig() {
    this._autoscaleIsAutoConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleIsAutoConfigInput() {
    return this._autoscaleIsAutoConfig;
  }

  // autoscale_is_enabled - computed: false, optional: true, required: false
  private _autoscaleIsEnabled?: boolean | cdktf.IResolvable; 
  public get autoscaleIsEnabled() {
    return this.getBooleanAttribute('autoscale_is_enabled');
  }
  public set autoscaleIsEnabled(value: boolean | cdktf.IResolvable) {
    this._autoscaleIsEnabled = value;
  }
  public resetAutoscaleIsEnabled() {
    this._autoscaleIsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleIsEnabledInput() {
    return this._autoscaleIsEnabled;
  }

  // cluster_identifier - computed: false, optional: true, required: false
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  public resetClusterIdentifier() {
    this._clusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }

  // integration_mode - computed: false, optional: true, required: false
  private _integrationMode?: string; 
  public get integrationMode() {
    return this.getStringAttribute('integration_mode');
  }
  public set integrationMode(value: string) {
    this._integrationMode = value;
  }
  public resetIntegrationMode() {
    this._integrationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationModeInput() {
    return this._integrationMode;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // autoscale_down - computed: false, optional: true, required: false
  private _autoscaleDown = new ElastigroupAwsIntegrationKubernetesAutoscaleDownOutputReference(this, "autoscale_down");
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: ElastigroupAwsIntegrationKubernetesAutoscaleDown) {
    this._autoscaleDown.internalValue = value;
  }
  public resetAutoscaleDown() {
    this._autoscaleDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleDownInput() {
    return this._autoscaleDown.internalValue;
  }

  // autoscale_headroom - computed: false, optional: true, required: false
  private _autoscaleHeadroom = new ElastigroupAwsIntegrationKubernetesAutoscaleHeadroomOutputReference(this, "autoscale_headroom");
  public get autoscaleHeadroom() {
    return this._autoscaleHeadroom;
  }
  public putAutoscaleHeadroom(value: ElastigroupAwsIntegrationKubernetesAutoscaleHeadroom) {
    this._autoscaleHeadroom.internalValue = value;
  }
  public resetAutoscaleHeadroom() {
    this._autoscaleHeadroom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleHeadroomInput() {
    return this._autoscaleHeadroom.internalValue;
  }

  // autoscale_labels - computed: false, optional: true, required: false
  private _autoscaleLabels?: ElastigroupAwsIntegrationKubernetesAutoscaleLabels[] | cdktf.IResolvable; 
  public get autoscaleLabels() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('autoscale_labels')));
  }
  public set autoscaleLabels(value: ElastigroupAwsIntegrationKubernetesAutoscaleLabels[] | cdktf.IResolvable) {
    this._autoscaleLabels = value;
  }
  public resetAutoscaleLabels() {
    this._autoscaleLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleLabelsInput() {
    return this._autoscaleLabels;
  }
}
export interface ElastigroupAwsIntegrationMesosphere {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#api_server ElastigroupAws#api_server}
  */
  readonly apiServer: string;
}

export function elastigroupAwsIntegrationMesosphereToTerraform(struct?: ElastigroupAwsIntegrationMesosphereOutputReference | ElastigroupAwsIntegrationMesosphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server: cdktf.stringToTerraform(struct!.apiServer),
  }
}

export class ElastigroupAwsIntegrationMesosphereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationMesosphere | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServer = this._apiServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationMesosphere | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiServer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiServer = value.apiServer;
    }
  }

  // api_server - computed: false, optional: false, required: true
  private _apiServer?: string; 
  public get apiServer() {
    return this.getStringAttribute('api_server');
  }
  public set apiServer(value: string) {
    this._apiServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerInput() {
    return this._apiServer;
  }
}
export interface ElastigroupAwsIntegrationMultaiRuntime {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#deployment_id ElastigroupAws#deployment_id}
  */
  readonly deploymentId: string;
}

export function elastigroupAwsIntegrationMultaiRuntimeToTerraform(struct?: ElastigroupAwsIntegrationMultaiRuntimeOutputReference | ElastigroupAwsIntegrationMultaiRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_id: cdktf.stringToTerraform(struct!.deploymentId),
  }
}

export class ElastigroupAwsIntegrationMultaiRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationMultaiRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentId = this._deploymentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationMultaiRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deploymentId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deploymentId = value.deploymentId;
    }
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }
}
export interface ElastigroupAwsIntegrationNomadAutoscaleConstraints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#key ElastigroupAws#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#value ElastigroupAws#value}
  */
  readonly value: string;
}

export function elastigroupAwsIntegrationNomadAutoscaleConstraintsToTerraform(struct?: ElastigroupAwsIntegrationNomadAutoscaleConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupAwsIntegrationNomadAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#evaluation_periods ElastigroupAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
}

export function elastigroupAwsIntegrationNomadAutoscaleDownToTerraform(struct?: ElastigroupAwsIntegrationNomadAutoscaleDownOutputReference | ElastigroupAwsIntegrationNomadAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
  }
}

export class ElastigroupAwsIntegrationNomadAutoscaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationNomadAutoscaleDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationNomadAutoscaleDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluationPeriods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluationPeriods = value.evaluationPeriods;
    }
  }

  // evaluation_periods - computed: false, optional: true, required: false
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  public resetEvaluationPeriods() {
    this._evaluationPeriods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
  }
}
export interface ElastigroupAwsIntegrationNomadAutoscaleHeadroom {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#cpu_per_unit ElastigroupAws#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#memory_per_unit ElastigroupAws#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#num_of_units ElastigroupAws#num_of_units}
  */
  readonly numOfUnits?: number;
}

export function elastigroupAwsIntegrationNomadAutoscaleHeadroomToTerraform(struct?: ElastigroupAwsIntegrationNomadAutoscaleHeadroomOutputReference | ElastigroupAwsIntegrationNomadAutoscaleHeadroom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_per_unit: cdktf.numberToTerraform(struct!.cpuPerUnit),
    memory_per_unit: cdktf.numberToTerraform(struct!.memoryPerUnit),
    num_of_units: cdktf.numberToTerraform(struct!.numOfUnits),
  }
}

export class ElastigroupAwsIntegrationNomadAutoscaleHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationNomadAutoscaleHeadroom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPerUnit = this._cpuPerUnit;
    }
    if (this._memoryPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryPerUnit = this._memoryPerUnit;
    }
    if (this._numOfUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfUnits = this._numOfUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationNomadAutoscaleHeadroom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuPerUnit = undefined;
      this._memoryPerUnit = undefined;
      this._numOfUnits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuPerUnit = value.cpuPerUnit;
      this._memoryPerUnit = value.memoryPerUnit;
      this._numOfUnits = value.numOfUnits;
    }
  }

  // cpu_per_unit - computed: false, optional: true, required: false
  private _cpuPerUnit?: number; 
  public get cpuPerUnit() {
    return this.getNumberAttribute('cpu_per_unit');
  }
  public set cpuPerUnit(value: number) {
    this._cpuPerUnit = value;
  }
  public resetCpuPerUnit() {
    this._cpuPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPerUnitInput() {
    return this._cpuPerUnit;
  }

  // memory_per_unit - computed: false, optional: true, required: false
  private _memoryPerUnit?: number; 
  public get memoryPerUnit() {
    return this.getNumberAttribute('memory_per_unit');
  }
  public set memoryPerUnit(value: number) {
    this._memoryPerUnit = value;
  }
  public resetMemoryPerUnit() {
    this._memoryPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryPerUnitInput() {
    return this._memoryPerUnit;
  }

  // num_of_units - computed: false, optional: true, required: false
  private _numOfUnits?: number; 
  public get numOfUnits() {
    return this.getNumberAttribute('num_of_units');
  }
  public set numOfUnits(value: number) {
    this._numOfUnits = value;
  }
  public resetNumOfUnits() {
    this._numOfUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfUnitsInput() {
    return this._numOfUnits;
  }
}
export interface ElastigroupAwsIntegrationNomad {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#acl_token ElastigroupAws#acl_token}
  */
  readonly aclToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_cooldown ElastigroupAws#autoscale_cooldown}
  */
  readonly autoscaleCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_is_enabled ElastigroupAws#autoscale_is_enabled}
  */
  readonly autoscaleIsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#master_host ElastigroupAws#master_host}
  */
  readonly masterHost: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#master_port ElastigroupAws#master_port}
  */
  readonly masterPort: number;
  /**
  * autoscale_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_constraints ElastigroupAws#autoscale_constraints}
  */
  readonly autoscaleConstraints?: ElastigroupAwsIntegrationNomadAutoscaleConstraints[] | cdktf.IResolvable;
  /**
  * autoscale_down block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_down ElastigroupAws#autoscale_down}
  */
  readonly autoscaleDown?: ElastigroupAwsIntegrationNomadAutoscaleDown;
  /**
  * autoscale_headroom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#autoscale_headroom ElastigroupAws#autoscale_headroom}
  */
  readonly autoscaleHeadroom?: ElastigroupAwsIntegrationNomadAutoscaleHeadroom;
}

export function elastigroupAwsIntegrationNomadToTerraform(struct?: ElastigroupAwsIntegrationNomadOutputReference | ElastigroupAwsIntegrationNomad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_token: cdktf.stringToTerraform(struct!.aclToken),
    autoscale_cooldown: cdktf.numberToTerraform(struct!.autoscaleCooldown),
    autoscale_is_enabled: cdktf.booleanToTerraform(struct!.autoscaleIsEnabled),
    master_host: cdktf.stringToTerraform(struct!.masterHost),
    master_port: cdktf.numberToTerraform(struct!.masterPort),
    autoscale_constraints: cdktf.listMapper(elastigroupAwsIntegrationNomadAutoscaleConstraintsToTerraform)(struct!.autoscaleConstraints),
    autoscale_down: elastigroupAwsIntegrationNomadAutoscaleDownToTerraform(struct!.autoscaleDown),
    autoscale_headroom: elastigroupAwsIntegrationNomadAutoscaleHeadroomToTerraform(struct!.autoscaleHeadroom),
  }
}

export class ElastigroupAwsIntegrationNomadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationNomad | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclToken = this._aclToken;
    }
    if (this._autoscaleCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleCooldown = this._autoscaleCooldown;
    }
    if (this._autoscaleIsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleIsEnabled = this._autoscaleIsEnabled;
    }
    if (this._masterHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterHost = this._masterHost;
    }
    if (this._masterPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPort = this._masterPort;
    }
    if (this._autoscaleConstraints !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleConstraints = this._autoscaleConstraints;
    }
    if (this._autoscaleDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleDown = this._autoscaleDown?.internalValue;
    }
    if (this._autoscaleHeadroom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleHeadroom = this._autoscaleHeadroom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationNomad | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aclToken = undefined;
      this._autoscaleCooldown = undefined;
      this._autoscaleIsEnabled = undefined;
      this._masterHost = undefined;
      this._masterPort = undefined;
      this._autoscaleConstraints = undefined;
      this._autoscaleDown.internalValue = undefined;
      this._autoscaleHeadroom.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aclToken = value.aclToken;
      this._autoscaleCooldown = value.autoscaleCooldown;
      this._autoscaleIsEnabled = value.autoscaleIsEnabled;
      this._masterHost = value.masterHost;
      this._masterPort = value.masterPort;
      this._autoscaleConstraints = value.autoscaleConstraints;
      this._autoscaleDown.internalValue = value.autoscaleDown;
      this._autoscaleHeadroom.internalValue = value.autoscaleHeadroom;
    }
  }

  // acl_token - computed: false, optional: true, required: false
  private _aclToken?: string; 
  public get aclToken() {
    return this.getStringAttribute('acl_token');
  }
  public set aclToken(value: string) {
    this._aclToken = value;
  }
  public resetAclToken() {
    this._aclToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclTokenInput() {
    return this._aclToken;
  }

  // autoscale_cooldown - computed: false, optional: true, required: false
  private _autoscaleCooldown?: number; 
  public get autoscaleCooldown() {
    return this.getNumberAttribute('autoscale_cooldown');
  }
  public set autoscaleCooldown(value: number) {
    this._autoscaleCooldown = value;
  }
  public resetAutoscaleCooldown() {
    this._autoscaleCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleCooldownInput() {
    return this._autoscaleCooldown;
  }

  // autoscale_is_enabled - computed: false, optional: true, required: false
  private _autoscaleIsEnabled?: boolean | cdktf.IResolvable; 
  public get autoscaleIsEnabled() {
    return this.getBooleanAttribute('autoscale_is_enabled');
  }
  public set autoscaleIsEnabled(value: boolean | cdktf.IResolvable) {
    this._autoscaleIsEnabled = value;
  }
  public resetAutoscaleIsEnabled() {
    this._autoscaleIsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleIsEnabledInput() {
    return this._autoscaleIsEnabled;
  }

  // master_host - computed: false, optional: false, required: true
  private _masterHost?: string; 
  public get masterHost() {
    return this.getStringAttribute('master_host');
  }
  public set masterHost(value: string) {
    this._masterHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterHostInput() {
    return this._masterHost;
  }

  // master_port - computed: false, optional: false, required: true
  private _masterPort?: number; 
  public get masterPort() {
    return this.getNumberAttribute('master_port');
  }
  public set masterPort(value: number) {
    this._masterPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPortInput() {
    return this._masterPort;
  }

  // autoscale_constraints - computed: false, optional: true, required: false
  private _autoscaleConstraints?: ElastigroupAwsIntegrationNomadAutoscaleConstraints[] | cdktf.IResolvable; 
  public get autoscaleConstraints() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('autoscale_constraints')));
  }
  public set autoscaleConstraints(value: ElastigroupAwsIntegrationNomadAutoscaleConstraints[] | cdktf.IResolvable) {
    this._autoscaleConstraints = value;
  }
  public resetAutoscaleConstraints() {
    this._autoscaleConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleConstraintsInput() {
    return this._autoscaleConstraints;
  }

  // autoscale_down - computed: false, optional: true, required: false
  private _autoscaleDown = new ElastigroupAwsIntegrationNomadAutoscaleDownOutputReference(this, "autoscale_down");
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: ElastigroupAwsIntegrationNomadAutoscaleDown) {
    this._autoscaleDown.internalValue = value;
  }
  public resetAutoscaleDown() {
    this._autoscaleDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleDownInput() {
    return this._autoscaleDown.internalValue;
  }

  // autoscale_headroom - computed: false, optional: true, required: false
  private _autoscaleHeadroom = new ElastigroupAwsIntegrationNomadAutoscaleHeadroomOutputReference(this, "autoscale_headroom");
  public get autoscaleHeadroom() {
    return this._autoscaleHeadroom;
  }
  public putAutoscaleHeadroom(value: ElastigroupAwsIntegrationNomadAutoscaleHeadroom) {
    this._autoscaleHeadroom.internalValue = value;
  }
  public resetAutoscaleHeadroom() {
    this._autoscaleHeadroom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleHeadroomInput() {
    return this._autoscaleHeadroom.internalValue;
  }
}
export interface ElastigroupAwsIntegrationRancher {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#access_key ElastigroupAws#access_key}
  */
  readonly accessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#master_host ElastigroupAws#master_host}
  */
  readonly masterHost: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#secret_key ElastigroupAws#secret_key}
  */
  readonly secretKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#version ElastigroupAws#version}
  */
  readonly version?: string;
}

export function elastigroupAwsIntegrationRancherToTerraform(struct?: ElastigroupAwsIntegrationRancherOutputReference | ElastigroupAwsIntegrationRancher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    master_host: cdktf.stringToTerraform(struct!.masterHost),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class ElastigroupAwsIntegrationRancherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationRancher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._masterHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterHost = this._masterHost;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationRancher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._masterHost = undefined;
      this._secretKey = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._masterHost = value.masterHost;
      this._secretKey = value.secretKey;
      this._version = value.version;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // master_host - computed: false, optional: false, required: true
  private _masterHost?: string; 
  public get masterHost() {
    return this.getStringAttribute('master_host');
  }
  public set masterHost(value: string) {
    this._masterHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterHostInput() {
    return this._masterHost;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ElastigroupAwsIntegrationRoute53DomainsRecordSets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#use_public_dns ElastigroupAws#use_public_dns}
  */
  readonly usePublicDns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#use_public_ip ElastigroupAws#use_public_ip}
  */
  readonly usePublicIp?: boolean | cdktf.IResolvable;
}

export function elastigroupAwsIntegrationRoute53DomainsRecordSetsToTerraform(struct?: ElastigroupAwsIntegrationRoute53DomainsRecordSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    use_public_dns: cdktf.booleanToTerraform(struct!.usePublicDns),
    use_public_ip: cdktf.booleanToTerraform(struct!.usePublicIp),
  }
}

export interface ElastigroupAwsIntegrationRoute53Domains {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#hosted_zone_id ElastigroupAws#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#record_set_type ElastigroupAws#record_set_type}
  */
  readonly recordSetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#spotinst_acct_id ElastigroupAws#spotinst_acct_id}
  */
  readonly spotinstAcctId?: string;
  /**
  * record_sets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#record_sets ElastigroupAws#record_sets}
  */
  readonly recordSets: ElastigroupAwsIntegrationRoute53DomainsRecordSets[] | cdktf.IResolvable;
}

export function elastigroupAwsIntegrationRoute53DomainsToTerraform(struct?: ElastigroupAwsIntegrationRoute53Domains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosted_zone_id: cdktf.stringToTerraform(struct!.hostedZoneId),
    record_set_type: cdktf.stringToTerraform(struct!.recordSetType),
    spotinst_acct_id: cdktf.stringToTerraform(struct!.spotinstAcctId),
    record_sets: cdktf.listMapper(elastigroupAwsIntegrationRoute53DomainsRecordSetsToTerraform)(struct!.recordSets),
  }
}

export interface ElastigroupAwsIntegrationRoute53 {
  /**
  * domains block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#domains ElastigroupAws#domains}
  */
  readonly domains: ElastigroupAwsIntegrationRoute53Domains[] | cdktf.IResolvable;
}

export function elastigroupAwsIntegrationRoute53ToTerraform(struct?: ElastigroupAwsIntegrationRoute53OutputReference | ElastigroupAwsIntegrationRoute53): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(elastigroupAwsIntegrationRoute53DomainsToTerraform)(struct!.domains),
  }
}

export class ElastigroupAwsIntegrationRoute53OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationRoute53 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationRoute53 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains = value.domains;
    }
  }

  // domains - computed: false, optional: false, required: true
  private _domains?: ElastigroupAwsIntegrationRoute53Domains[] | cdktf.IResolvable; 
  public get domains() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('domains')));
  }
  public set domains(value: ElastigroupAwsIntegrationRoute53Domains[] | cdktf.IResolvable) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }
}
export interface ElastigroupAwsItfDefaultStaticTargetGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#arn ElastigroupAws#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#percentage ElastigroupAws#percentage}
  */
  readonly percentage: number;
}

export function elastigroupAwsItfDefaultStaticTargetGroupToTerraform(struct?: ElastigroupAwsItfDefaultStaticTargetGroupOutputReference | ElastigroupAwsItfDefaultStaticTargetGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export class ElastigroupAwsItfDefaultStaticTargetGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsItfDefaultStaticTargetGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsItfDefaultStaticTargetGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._percentage = value.percentage;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#arn ElastigroupAws#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#percentage ElastigroupAws#percentage}
  */
  readonly percentage: number;
}

export function elastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroupToTerraform(struct?: ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroupOutputReference | ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export class ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._percentage = value.percentage;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface ElastigroupAwsItfLoadBalancerListenerRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#rule_arn ElastigroupAws#rule_arn}
  */
  readonly ruleArn: string;
  /**
  * static_target_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#static_target_group ElastigroupAws#static_target_group}
  */
  readonly staticTargetGroup?: ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroup;
}

export function elastigroupAwsItfLoadBalancerListenerRuleToTerraform(struct?: ElastigroupAwsItfLoadBalancerListenerRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_arn: cdktf.stringToTerraform(struct!.ruleArn),
    static_target_group: elastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroupToTerraform(struct!.staticTargetGroup),
  }
}

export interface ElastigroupAwsItfLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#load_balancer_arn ElastigroupAws#load_balancer_arn}
  */
  readonly loadBalancerArn: string;
  /**
  * listener_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#listener_rule ElastigroupAws#listener_rule}
  */
  readonly listenerRule: ElastigroupAwsItfLoadBalancerListenerRule[] | cdktf.IResolvable;
}

export function elastigroupAwsItfLoadBalancerToTerraform(struct?: ElastigroupAwsItfLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balancer_arn: cdktf.stringToTerraform(struct!.loadBalancerArn),
    listener_rule: cdktf.listMapper(elastigroupAwsItfLoadBalancerListenerRuleToTerraform)(struct!.listenerRule),
  }
}

export interface ElastigroupAwsItfTargetGroupConfigMatcher {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#grpc_code ElastigroupAws#grpc_code}
  */
  readonly grpcCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#http_code ElastigroupAws#http_code}
  */
  readonly httpCode?: string;
}

export function elastigroupAwsItfTargetGroupConfigMatcherToTerraform(struct?: ElastigroupAwsItfTargetGroupConfigMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_code: cdktf.stringToTerraform(struct!.grpcCode),
    http_code: cdktf.stringToTerraform(struct!.httpCode),
  }
}

export interface ElastigroupAwsItfTargetGroupConfigTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#tag_key ElastigroupAws#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#tag_value ElastigroupAws#tag_value}
  */
  readonly tagValue?: string;
}

export function elastigroupAwsItfTargetGroupConfigTagsToTerraform(struct?: ElastigroupAwsItfTargetGroupConfigTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}

export interface ElastigroupAwsItfTargetGroupConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#health_check_interval_seconds ElastigroupAws#health_check_interval_seconds}
  */
  readonly healthCheckIntervalSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#health_check_path ElastigroupAws#health_check_path}
  */
  readonly healthCheckPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#health_check_port ElastigroupAws#health_check_port}
  */
  readonly healthCheckPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#health_check_protocol ElastigroupAws#health_check_protocol}
  */
  readonly healthCheckProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#health_check_timeout_seconds ElastigroupAws#health_check_timeout_seconds}
  */
  readonly healthCheckTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#healthy_threshold_count ElastigroupAws#healthy_threshold_count}
  */
  readonly healthyThresholdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#port ElastigroupAws#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#protocol ElastigroupAws#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#protocol_version ElastigroupAws#protocol_version}
  */
  readonly protocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#unhealthy_threshold_count ElastigroupAws#unhealthy_threshold_count}
  */
  readonly unhealthyThresholdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#vpc_id ElastigroupAws#vpc_id}
  */
  readonly vpcId: string;
  /**
  * matcher block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#matcher ElastigroupAws#matcher}
  */
  readonly matcher?: ElastigroupAwsItfTargetGroupConfigMatcher[] | cdktf.IResolvable;
  /**
  * tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#tags ElastigroupAws#tags}
  */
  readonly tags?: ElastigroupAwsItfTargetGroupConfigTags[] | cdktf.IResolvable;
}

export function elastigroupAwsItfTargetGroupConfigToTerraform(struct?: ElastigroupAwsItfTargetGroupConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check_interval_seconds: cdktf.numberToTerraform(struct!.healthCheckIntervalSeconds),
    health_check_path: cdktf.stringToTerraform(struct!.healthCheckPath),
    health_check_port: cdktf.stringToTerraform(struct!.healthCheckPort),
    health_check_protocol: cdktf.stringToTerraform(struct!.healthCheckProtocol),
    health_check_timeout_seconds: cdktf.numberToTerraform(struct!.healthCheckTimeoutSeconds),
    healthy_threshold_count: cdktf.numberToTerraform(struct!.healthyThresholdCount),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_version: cdktf.stringToTerraform(struct!.protocolVersion),
    unhealthy_threshold_count: cdktf.numberToTerraform(struct!.unhealthyThresholdCount),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    matcher: cdktf.listMapper(elastigroupAwsItfTargetGroupConfigMatcherToTerraform)(struct!.matcher),
    tags: cdktf.listMapper(elastigroupAwsItfTargetGroupConfigTagsToTerraform)(struct!.tags),
  }
}

export interface ElastigroupAwsItf {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#fixed_target_groups ElastigroupAws#fixed_target_groups}
  */
  readonly fixedTargetGroups: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#migration_healthiness_threshold ElastigroupAws#migration_healthiness_threshold}
  */
  readonly migrationHealthinessThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#weight_strategy ElastigroupAws#weight_strategy}
  */
  readonly weightStrategy: string;
  /**
  * default_static_target_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#default_static_target_group ElastigroupAws#default_static_target_group}
  */
  readonly defaultStaticTargetGroup?: ElastigroupAwsItfDefaultStaticTargetGroup;
  /**
  * load_balancer block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#load_balancer ElastigroupAws#load_balancer}
  */
  readonly loadBalancer: ElastigroupAwsItfLoadBalancer[] | cdktf.IResolvable;
  /**
  * target_group_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#target_group_config ElastigroupAws#target_group_config}
  */
  readonly targetGroupConfig: ElastigroupAwsItfTargetGroupConfig[] | cdktf.IResolvable;
}

export function elastigroupAwsItfToTerraform(struct?: ElastigroupAwsItf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_target_groups: cdktf.booleanToTerraform(struct!.fixedTargetGroups),
    migration_healthiness_threshold: cdktf.numberToTerraform(struct!.migrationHealthinessThreshold),
    weight_strategy: cdktf.stringToTerraform(struct!.weightStrategy),
    default_static_target_group: elastigroupAwsItfDefaultStaticTargetGroupToTerraform(struct!.defaultStaticTargetGroup),
    load_balancer: cdktf.listMapper(elastigroupAwsItfLoadBalancerToTerraform)(struct!.loadBalancer),
    target_group_config: cdktf.listMapper(elastigroupAwsItfTargetGroupConfigToTerraform)(struct!.targetGroupConfig),
  }
}

export interface ElastigroupAwsMetadataOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#http_put_response_hop_limit ElastigroupAws#http_put_response_hop_limit}
  */
  readonly httpPutResponseHopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#http_tokens ElastigroupAws#http_tokens}
  */
  readonly httpTokens: string;
}

export function elastigroupAwsMetadataOptionsToTerraform(struct?: ElastigroupAwsMetadataOptionsOutputReference | ElastigroupAwsMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
    http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
  }
}

export class ElastigroupAwsMetadataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsMetadataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpPutResponseHopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPutResponseHopLimit = this._httpPutResponseHopLimit;
    }
    if (this._httpTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTokens = this._httpTokens;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsMetadataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpPutResponseHopLimit = undefined;
      this._httpTokens = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpPutResponseHopLimit = value.httpPutResponseHopLimit;
      this._httpTokens = value.httpTokens;
    }
  }

  // http_put_response_hop_limit - computed: false, optional: true, required: false
  private _httpPutResponseHopLimit?: number; 
  public get httpPutResponseHopLimit() {
    return this.getNumberAttribute('http_put_response_hop_limit');
  }
  public set httpPutResponseHopLimit(value: number) {
    this._httpPutResponseHopLimit = value;
  }
  public resetHttpPutResponseHopLimit() {
    this._httpPutResponseHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPutResponseHopLimitInput() {
    return this._httpPutResponseHopLimit;
  }

  // http_tokens - computed: false, optional: false, required: true
  private _httpTokens?: string; 
  public get httpTokens() {
    return this.getStringAttribute('http_tokens');
  }
  public set httpTokens(value: string) {
    this._httpTokens = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTokensInput() {
    return this._httpTokens;
  }
}
export interface ElastigroupAwsMultaiTargetSets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#balancer_id ElastigroupAws#balancer_id}
  */
  readonly balancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#target_set_id ElastigroupAws#target_set_id}
  */
  readonly targetSetId: string;
}

export function elastigroupAwsMultaiTargetSetsToTerraform(struct?: ElastigroupAwsMultaiTargetSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balancer_id: cdktf.stringToTerraform(struct!.balancerId),
    target_set_id: cdktf.stringToTerraform(struct!.targetSetId),
  }
}

export interface ElastigroupAwsMultipleMetricsExpressions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#expression ElastigroupAws#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
}

export function elastigroupAwsMultipleMetricsExpressionsToTerraform(struct?: ElastigroupAwsMultipleMetricsExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ElastigroupAwsMultipleMetricsMetricsDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#value ElastigroupAws#value}
  */
  readonly value?: string;
}

export function elastigroupAwsMultipleMetricsMetricsDimensionsToTerraform(struct?: ElastigroupAwsMultipleMetricsMetricsDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupAwsMultipleMetricsMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#extended_statistic ElastigroupAws#extended_statistic}
  */
  readonly extendedStatistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#metric_name ElastigroupAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#namespace ElastigroupAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#statistic ElastigroupAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#unit ElastigroupAws#unit}
  */
  readonly unit?: string;
  /**
  * dimensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#dimensions ElastigroupAws#dimensions}
  */
  readonly dimensions?: ElastigroupAwsMultipleMetricsMetricsDimensions[] | cdktf.IResolvable;
}

export function elastigroupAwsMultipleMetricsMetricsToTerraform(struct?: ElastigroupAwsMultipleMetricsMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extended_statistic: cdktf.stringToTerraform(struct!.extendedStatistic),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    unit: cdktf.stringToTerraform(struct!.unit),
    dimensions: cdktf.listMapper(elastigroupAwsMultipleMetricsMetricsDimensionsToTerraform)(struct!.dimensions),
  }
}

export interface ElastigroupAwsMultipleMetrics {
  /**
  * expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#expressions ElastigroupAws#expressions}
  */
  readonly expressions?: ElastigroupAwsMultipleMetricsExpressions[] | cdktf.IResolvable;
  /**
  * metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#metrics ElastigroupAws#metrics}
  */
  readonly metrics?: ElastigroupAwsMultipleMetricsMetrics[] | cdktf.IResolvable;
}

export function elastigroupAwsMultipleMetricsToTerraform(struct?: ElastigroupAwsMultipleMetricsOutputReference | ElastigroupAwsMultipleMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(elastigroupAwsMultipleMetricsExpressionsToTerraform)(struct!.expressions),
    metrics: cdktf.listMapper(elastigroupAwsMultipleMetricsMetricsToTerraform)(struct!.metrics),
  }
}

export class ElastigroupAwsMultipleMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsMultipleMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsMultipleMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
      this._metrics = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
      this._metrics = value.metrics;
    }
  }

  // expressions - computed: false, optional: true, required: false
  private _expressions?: ElastigroupAwsMultipleMetricsExpressions[] | cdktf.IResolvable; 
  public get expressions() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('expressions')));
  }
  public set expressions(value: ElastigroupAwsMultipleMetricsExpressions[] | cdktf.IResolvable) {
    this._expressions = value;
  }
  public resetExpressions() {
    this._expressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics?: ElastigroupAwsMultipleMetricsMetrics[] | cdktf.IResolvable; 
  public get metrics() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('metrics')));
  }
  public set metrics(value: ElastigroupAwsMultipleMetricsMetrics[] | cdktf.IResolvable) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }
}
export interface ElastigroupAwsNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#associate_ipv6_address ElastigroupAws#associate_ipv6_address}
  */
  readonly associateIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#associate_public_ip_address ElastigroupAws#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#delete_on_termination ElastigroupAws#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#description ElastigroupAws#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#device_index ElastigroupAws#device_index}
  */
  readonly deviceIndex: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#network_interface_id ElastigroupAws#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#private_ip_address ElastigroupAws#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#secondary_private_ip_address_count ElastigroupAws#secondary_private_ip_address_count}
  */
  readonly secondaryPrivateIpAddressCount?: string;
}

export function elastigroupAwsNetworkInterfaceToTerraform(struct?: ElastigroupAwsNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associate_ipv6_address: cdktf.booleanToTerraform(struct!.associateIpv6Address),
    associate_public_ip_address: cdktf.booleanToTerraform(struct!.associatePublicIpAddress),
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    description: cdktf.stringToTerraform(struct!.description),
    device_index: cdktf.stringToTerraform(struct!.deviceIndex),
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    secondary_private_ip_address_count: cdktf.stringToTerraform(struct!.secondaryPrivateIpAddressCount),
  }
}

export interface ElastigroupAwsResourceTagSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#should_tag_amis ElastigroupAws#should_tag_amis}
  */
  readonly shouldTagAmis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#should_tag_enis ElastigroupAws#should_tag_enis}
  */
  readonly shouldTagEnis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#should_tag_snapshots ElastigroupAws#should_tag_snapshots}
  */
  readonly shouldTagSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#should_tag_volumes ElastigroupAws#should_tag_volumes}
  */
  readonly shouldTagVolumes?: boolean | cdktf.IResolvable;
}

export function elastigroupAwsResourceTagSpecificationToTerraform(struct?: ElastigroupAwsResourceTagSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_tag_amis: cdktf.booleanToTerraform(struct!.shouldTagAmis),
    should_tag_enis: cdktf.booleanToTerraform(struct!.shouldTagEnis),
    should_tag_snapshots: cdktf.booleanToTerraform(struct!.shouldTagSnapshots),
    should_tag_volumes: cdktf.booleanToTerraform(struct!.shouldTagVolumes),
  }
}

export interface ElastigroupAwsRevertToSpot {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#perform_at ElastigroupAws#perform_at}
  */
  readonly performAt: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#time_windows ElastigroupAws#time_windows}
  */
  readonly timeWindows?: string[];
}

export function elastigroupAwsRevertToSpotToTerraform(struct?: ElastigroupAwsRevertToSpotOutputReference | ElastigroupAwsRevertToSpot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perform_at: cdktf.stringToTerraform(struct!.performAt),
    time_windows: cdktf.listMapper(cdktf.stringToTerraform)(struct!.timeWindows),
  }
}

export class ElastigroupAwsRevertToSpotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsRevertToSpot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._performAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.performAt = this._performAt;
    }
    if (this._timeWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindows = this._timeWindows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsRevertToSpot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._performAt = undefined;
      this._timeWindows = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._performAt = value.performAt;
      this._timeWindows = value.timeWindows;
    }
  }

  // perform_at - computed: false, optional: false, required: true
  private _performAt?: string; 
  public get performAt() {
    return this.getStringAttribute('perform_at');
  }
  public set performAt(value: string) {
    this._performAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get performAtInput() {
    return this._performAt;
  }

  // time_windows - computed: false, optional: true, required: false
  private _timeWindows?: string[]; 
  public get timeWindows() {
    return this.getListAttribute('time_windows');
  }
  public set timeWindows(value: string[]) {
    this._timeWindows = value;
  }
  public resetTimeWindows() {
    this._timeWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowsInput() {
    return this._timeWindows;
  }
}
export interface ElastigroupAwsScalingDownPolicyDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#value ElastigroupAws#value}
  */
  readonly value?: string;
}

export function elastigroupAwsScalingDownPolicyDimensionsToTerraform(struct?: ElastigroupAwsScalingDownPolicyDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupAwsScalingDownPolicyStepAdjustmentsAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#adjustment ElastigroupAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#max_target_capacity ElastigroupAws#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#maximum ElastigroupAws#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#min_target_capacity ElastigroupAws#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#minimum ElastigroupAws#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#target ElastigroupAws#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#type ElastigroupAws#type}
  */
  readonly type: string;
}

export function elastigroupAwsScalingDownPolicyStepAdjustmentsActionToTerraform(struct?: ElastigroupAwsScalingDownPolicyStepAdjustmentsActionOutputReference | ElastigroupAwsScalingDownPolicyStepAdjustmentsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ElastigroupAwsScalingDownPolicyStepAdjustmentsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsScalingDownPolicyStepAdjustmentsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustment = this._adjustment;
    }
    if (this._maxTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTargetCapacity = this._maxTargetCapacity;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTargetCapacity = this._minTargetCapacity;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsScalingDownPolicyStepAdjustmentsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adjustment = undefined;
      this._maxTargetCapacity = undefined;
      this._maximum = undefined;
      this._minTargetCapacity = undefined;
      this._minimum = undefined;
      this._target = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adjustment = value.adjustment;
      this._maxTargetCapacity = value.maxTargetCapacity;
      this._maximum = value.maximum;
      this._minTargetCapacity = value.minTargetCapacity;
      this._minimum = value.minimum;
      this._target = value.target;
      this._type = value.type;
    }
  }

  // adjustment - computed: false, optional: true, required: false
  private _adjustment?: string; 
  public get adjustment() {
    return this.getStringAttribute('adjustment');
  }
  public set adjustment(value: string) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // max_target_capacity - computed: false, optional: true, required: false
  private _maxTargetCapacity?: string; 
  public get maxTargetCapacity() {
    return this.getStringAttribute('max_target_capacity');
  }
  public set maxTargetCapacity(value: string) {
    this._maxTargetCapacity = value;
  }
  public resetMaxTargetCapacity() {
    this._maxTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTargetCapacityInput() {
    return this._maxTargetCapacity;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // min_target_capacity - computed: false, optional: true, required: false
  private _minTargetCapacity?: string; 
  public get minTargetCapacity() {
    return this.getStringAttribute('min_target_capacity');
  }
  public set minTargetCapacity(value: string) {
    this._minTargetCapacity = value;
  }
  public resetMinTargetCapacity() {
    this._minTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTargetCapacityInput() {
    return this._minTargetCapacity;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ElastigroupAwsScalingDownPolicyStepAdjustments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#threshold ElastigroupAws#threshold}
  */
  readonly threshold: number;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#action ElastigroupAws#action}
  */
  readonly action: ElastigroupAwsScalingDownPolicyStepAdjustmentsAction;
}

export function elastigroupAwsScalingDownPolicyStepAdjustmentsToTerraform(struct?: ElastigroupAwsScalingDownPolicyStepAdjustments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    action: elastigroupAwsScalingDownPolicyStepAdjustmentsActionToTerraform(struct!.action),
  }
}

export interface ElastigroupAwsScalingDownPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#action_type ElastigroupAws#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#adjustment ElastigroupAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#cooldown ElastigroupAws#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#evaluation_periods ElastigroupAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#is_enabled ElastigroupAws#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#max_target_capacity ElastigroupAws#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#maximum ElastigroupAws#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#metric_name ElastigroupAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#min_target_capacity ElastigroupAws#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#minimum ElastigroupAws#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#namespace ElastigroupAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#operator ElastigroupAws#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#period ElastigroupAws#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#policy_name ElastigroupAws#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#source ElastigroupAws#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#statistic ElastigroupAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#target ElastigroupAws#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#threshold ElastigroupAws#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#unit ElastigroupAws#unit}
  */
  readonly unit?: string;
  /**
  * dimensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#dimensions ElastigroupAws#dimensions}
  */
  readonly dimensions?: ElastigroupAwsScalingDownPolicyDimensions[] | cdktf.IResolvable;
  /**
  * step_adjustments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#step_adjustments ElastigroupAws#step_adjustments}
  */
  readonly stepAdjustments?: ElastigroupAwsScalingDownPolicyStepAdjustments[] | cdktf.IResolvable;
}

export function elastigroupAwsScalingDownPolicyToTerraform(struct?: ElastigroupAwsScalingDownPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    source: cdktf.stringToTerraform(struct!.source),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    target: cdktf.stringToTerraform(struct!.target),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    dimensions: cdktf.listMapper(elastigroupAwsScalingDownPolicyDimensionsToTerraform)(struct!.dimensions),
    step_adjustments: cdktf.listMapper(elastigroupAwsScalingDownPolicyStepAdjustmentsToTerraform)(struct!.stepAdjustments),
  }
}

export interface ElastigroupAwsScalingStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#terminate_at_end_of_billing_hour ElastigroupAws#terminate_at_end_of_billing_hour}
  */
  readonly terminateAtEndOfBillingHour?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#termination_policy ElastigroupAws#termination_policy}
  */
  readonly terminationPolicy?: string;
}

export function elastigroupAwsScalingStrategyToTerraform(struct?: ElastigroupAwsScalingStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    terminate_at_end_of_billing_hour: cdktf.booleanToTerraform(struct!.terminateAtEndOfBillingHour),
    termination_policy: cdktf.stringToTerraform(struct!.terminationPolicy),
  }
}

export interface ElastigroupAwsScalingTargetPolicyDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#value ElastigroupAws#value}
  */
  readonly value?: string;
}

export function elastigroupAwsScalingTargetPolicyDimensionsToTerraform(struct?: ElastigroupAwsScalingTargetPolicyDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupAwsScalingTargetPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#cooldown ElastigroupAws#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#evaluation_periods ElastigroupAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#max_capacity_per_scale ElastigroupAws#max_capacity_per_scale}
  */
  readonly maxCapacityPerScale?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#metric_name ElastigroupAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#namespace ElastigroupAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#period ElastigroupAws#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#policy_name ElastigroupAws#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#predictive_mode ElastigroupAws#predictive_mode}
  */
  readonly predictiveMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#source ElastigroupAws#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#statistic ElastigroupAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#target ElastigroupAws#target}
  */
  readonly target: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#unit ElastigroupAws#unit}
  */
  readonly unit?: string;
  /**
  * dimensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#dimensions ElastigroupAws#dimensions}
  */
  readonly dimensions?: ElastigroupAwsScalingTargetPolicyDimensions[] | cdktf.IResolvable;
}

export function elastigroupAwsScalingTargetPolicyToTerraform(struct?: ElastigroupAwsScalingTargetPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_capacity_per_scale: cdktf.stringToTerraform(struct!.maxCapacityPerScale),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    predictive_mode: cdktf.stringToTerraform(struct!.predictiveMode),
    source: cdktf.stringToTerraform(struct!.source),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    target: cdktf.numberToTerraform(struct!.target),
    unit: cdktf.stringToTerraform(struct!.unit),
    dimensions: cdktf.listMapper(elastigroupAwsScalingTargetPolicyDimensionsToTerraform)(struct!.dimensions),
  }
}

export interface ElastigroupAwsScalingUpPolicyDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#value ElastigroupAws#value}
  */
  readonly value?: string;
}

export function elastigroupAwsScalingUpPolicyDimensionsToTerraform(struct?: ElastigroupAwsScalingUpPolicyDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupAwsScalingUpPolicyStepAdjustmentsAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#adjustment ElastigroupAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#max_target_capacity ElastigroupAws#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#maximum ElastigroupAws#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#min_target_capacity ElastigroupAws#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#minimum ElastigroupAws#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#target ElastigroupAws#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#type ElastigroupAws#type}
  */
  readonly type: string;
}

export function elastigroupAwsScalingUpPolicyStepAdjustmentsActionToTerraform(struct?: ElastigroupAwsScalingUpPolicyStepAdjustmentsActionOutputReference | ElastigroupAwsScalingUpPolicyStepAdjustmentsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ElastigroupAwsScalingUpPolicyStepAdjustmentsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsScalingUpPolicyStepAdjustmentsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustment = this._adjustment;
    }
    if (this._maxTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTargetCapacity = this._maxTargetCapacity;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTargetCapacity = this._minTargetCapacity;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsScalingUpPolicyStepAdjustmentsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adjustment = undefined;
      this._maxTargetCapacity = undefined;
      this._maximum = undefined;
      this._minTargetCapacity = undefined;
      this._minimum = undefined;
      this._target = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adjustment = value.adjustment;
      this._maxTargetCapacity = value.maxTargetCapacity;
      this._maximum = value.maximum;
      this._minTargetCapacity = value.minTargetCapacity;
      this._minimum = value.minimum;
      this._target = value.target;
      this._type = value.type;
    }
  }

  // adjustment - computed: false, optional: true, required: false
  private _adjustment?: string; 
  public get adjustment() {
    return this.getStringAttribute('adjustment');
  }
  public set adjustment(value: string) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // max_target_capacity - computed: false, optional: true, required: false
  private _maxTargetCapacity?: string; 
  public get maxTargetCapacity() {
    return this.getStringAttribute('max_target_capacity');
  }
  public set maxTargetCapacity(value: string) {
    this._maxTargetCapacity = value;
  }
  public resetMaxTargetCapacity() {
    this._maxTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTargetCapacityInput() {
    return this._maxTargetCapacity;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // min_target_capacity - computed: false, optional: true, required: false
  private _minTargetCapacity?: string; 
  public get minTargetCapacity() {
    return this.getStringAttribute('min_target_capacity');
  }
  public set minTargetCapacity(value: string) {
    this._minTargetCapacity = value;
  }
  public resetMinTargetCapacity() {
    this._minTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTargetCapacityInput() {
    return this._minTargetCapacity;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ElastigroupAwsScalingUpPolicyStepAdjustments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#threshold ElastigroupAws#threshold}
  */
  readonly threshold: number;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#action ElastigroupAws#action}
  */
  readonly action: ElastigroupAwsScalingUpPolicyStepAdjustmentsAction;
}

export function elastigroupAwsScalingUpPolicyStepAdjustmentsToTerraform(struct?: ElastigroupAwsScalingUpPolicyStepAdjustments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    action: elastigroupAwsScalingUpPolicyStepAdjustmentsActionToTerraform(struct!.action),
  }
}

export interface ElastigroupAwsScalingUpPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#action_type ElastigroupAws#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#adjustment ElastigroupAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#cooldown ElastigroupAws#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#evaluation_periods ElastigroupAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#is_enabled ElastigroupAws#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#max_target_capacity ElastigroupAws#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#maximum ElastigroupAws#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#metric_name ElastigroupAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#min_target_capacity ElastigroupAws#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#minimum ElastigroupAws#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#namespace ElastigroupAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#operator ElastigroupAws#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#period ElastigroupAws#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#policy_name ElastigroupAws#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#source ElastigroupAws#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#statistic ElastigroupAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#target ElastigroupAws#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#threshold ElastigroupAws#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#unit ElastigroupAws#unit}
  */
  readonly unit?: string;
  /**
  * dimensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#dimensions ElastigroupAws#dimensions}
  */
  readonly dimensions?: ElastigroupAwsScalingUpPolicyDimensions[] | cdktf.IResolvable;
  /**
  * step_adjustments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#step_adjustments ElastigroupAws#step_adjustments}
  */
  readonly stepAdjustments?: ElastigroupAwsScalingUpPolicyStepAdjustments[] | cdktf.IResolvable;
}

export function elastigroupAwsScalingUpPolicyToTerraform(struct?: ElastigroupAwsScalingUpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    source: cdktf.stringToTerraform(struct!.source),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    target: cdktf.stringToTerraform(struct!.target),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    dimensions: cdktf.listMapper(elastigroupAwsScalingUpPolicyDimensionsToTerraform)(struct!.dimensions),
    step_adjustments: cdktf.listMapper(elastigroupAwsScalingUpPolicyStepAdjustmentsToTerraform)(struct!.stepAdjustments),
  }
}

export interface ElastigroupAwsScheduledTask {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#adjustment ElastigroupAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#adjustment_percentage ElastigroupAws#adjustment_percentage}
  */
  readonly adjustmentPercentage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#batch_size_percentage ElastigroupAws#batch_size_percentage}
  */
  readonly batchSizePercentage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#cron_expression ElastigroupAws#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#frequency ElastigroupAws#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#grace_period ElastigroupAws#grace_period}
  */
  readonly gracePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#is_enabled ElastigroupAws#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#max_capacity ElastigroupAws#max_capacity}
  */
  readonly maxCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#min_capacity ElastigroupAws#min_capacity}
  */
  readonly minCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#scale_max_capacity ElastigroupAws#scale_max_capacity}
  */
  readonly scaleMaxCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#scale_min_capacity ElastigroupAws#scale_min_capacity}
  */
  readonly scaleMinCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#scale_target_capacity ElastigroupAws#scale_target_capacity}
  */
  readonly scaleTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#start_time ElastigroupAws#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#target_capacity ElastigroupAws#target_capacity}
  */
  readonly targetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#task_type ElastigroupAws#task_type}
  */
  readonly taskType: string;
}

export function elastigroupAwsScheduledTaskToTerraform(struct?: ElastigroupAwsScheduledTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    adjustment_percentage: cdktf.stringToTerraform(struct!.adjustmentPercentage),
    batch_size_percentage: cdktf.stringToTerraform(struct!.batchSizePercentage),
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    grace_period: cdktf.stringToTerraform(struct!.gracePeriod),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    max_capacity: cdktf.stringToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.stringToTerraform(struct!.minCapacity),
    scale_max_capacity: cdktf.stringToTerraform(struct!.scaleMaxCapacity),
    scale_min_capacity: cdktf.stringToTerraform(struct!.scaleMinCapacity),
    scale_target_capacity: cdktf.stringToTerraform(struct!.scaleTargetCapacity),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    target_capacity: cdktf.stringToTerraform(struct!.targetCapacity),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}

export interface ElastigroupAwsSignal {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#timeout ElastigroupAws#timeout}
  */
  readonly timeout?: number;
}

export function elastigroupAwsSignalToTerraform(struct?: ElastigroupAwsSignal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}

export interface ElastigroupAwsStatefulDeallocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#should_delete_images ElastigroupAws#should_delete_images}
  */
  readonly shouldDeleteImages?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#should_delete_network_interfaces ElastigroupAws#should_delete_network_interfaces}
  */
  readonly shouldDeleteNetworkInterfaces?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#should_delete_snapshots ElastigroupAws#should_delete_snapshots}
  */
  readonly shouldDeleteSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#should_delete_volumes ElastigroupAws#should_delete_volumes}
  */
  readonly shouldDeleteVolumes?: boolean | cdktf.IResolvable;
}

export function elastigroupAwsStatefulDeallocationToTerraform(struct?: ElastigroupAwsStatefulDeallocationOutputReference | ElastigroupAwsStatefulDeallocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_delete_images: cdktf.booleanToTerraform(struct!.shouldDeleteImages),
    should_delete_network_interfaces: cdktf.booleanToTerraform(struct!.shouldDeleteNetworkInterfaces),
    should_delete_snapshots: cdktf.booleanToTerraform(struct!.shouldDeleteSnapshots),
    should_delete_volumes: cdktf.booleanToTerraform(struct!.shouldDeleteVolumes),
  }
}

export class ElastigroupAwsStatefulDeallocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsStatefulDeallocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldDeleteImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDeleteImages = this._shouldDeleteImages;
    }
    if (this._shouldDeleteNetworkInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDeleteNetworkInterfaces = this._shouldDeleteNetworkInterfaces;
    }
    if (this._shouldDeleteSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDeleteSnapshots = this._shouldDeleteSnapshots;
    }
    if (this._shouldDeleteVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDeleteVolumes = this._shouldDeleteVolumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsStatefulDeallocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shouldDeleteImages = undefined;
      this._shouldDeleteNetworkInterfaces = undefined;
      this._shouldDeleteSnapshots = undefined;
      this._shouldDeleteVolumes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shouldDeleteImages = value.shouldDeleteImages;
      this._shouldDeleteNetworkInterfaces = value.shouldDeleteNetworkInterfaces;
      this._shouldDeleteSnapshots = value.shouldDeleteSnapshots;
      this._shouldDeleteVolumes = value.shouldDeleteVolumes;
    }
  }

  // should_delete_images - computed: false, optional: true, required: false
  private _shouldDeleteImages?: boolean | cdktf.IResolvable; 
  public get shouldDeleteImages() {
    return this.getBooleanAttribute('should_delete_images');
  }
  public set shouldDeleteImages(value: boolean | cdktf.IResolvable) {
    this._shouldDeleteImages = value;
  }
  public resetShouldDeleteImages() {
    this._shouldDeleteImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDeleteImagesInput() {
    return this._shouldDeleteImages;
  }

  // should_delete_network_interfaces - computed: false, optional: true, required: false
  private _shouldDeleteNetworkInterfaces?: boolean | cdktf.IResolvable; 
  public get shouldDeleteNetworkInterfaces() {
    return this.getBooleanAttribute('should_delete_network_interfaces');
  }
  public set shouldDeleteNetworkInterfaces(value: boolean | cdktf.IResolvable) {
    this._shouldDeleteNetworkInterfaces = value;
  }
  public resetShouldDeleteNetworkInterfaces() {
    this._shouldDeleteNetworkInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDeleteNetworkInterfacesInput() {
    return this._shouldDeleteNetworkInterfaces;
  }

  // should_delete_snapshots - computed: false, optional: true, required: false
  private _shouldDeleteSnapshots?: boolean | cdktf.IResolvable; 
  public get shouldDeleteSnapshots() {
    return this.getBooleanAttribute('should_delete_snapshots');
  }
  public set shouldDeleteSnapshots(value: boolean | cdktf.IResolvable) {
    this._shouldDeleteSnapshots = value;
  }
  public resetShouldDeleteSnapshots() {
    this._shouldDeleteSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDeleteSnapshotsInput() {
    return this._shouldDeleteSnapshots;
  }

  // should_delete_volumes - computed: false, optional: true, required: false
  private _shouldDeleteVolumes?: boolean | cdktf.IResolvable; 
  public get shouldDeleteVolumes() {
    return this.getBooleanAttribute('should_delete_volumes');
  }
  public set shouldDeleteVolumes(value: boolean | cdktf.IResolvable) {
    this._shouldDeleteVolumes = value;
  }
  public resetShouldDeleteVolumes() {
    this._shouldDeleteVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDeleteVolumesInput() {
    return this._shouldDeleteVolumes;
  }
}
export interface ElastigroupAwsStatefulInstanceAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#stateful_instance_id ElastigroupAws#stateful_instance_id}
  */
  readonly statefulInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#type ElastigroupAws#type}
  */
  readonly type: string;
}

export function elastigroupAwsStatefulInstanceActionToTerraform(struct?: ElastigroupAwsStatefulInstanceAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stateful_instance_id: cdktf.stringToTerraform(struct!.statefulInstanceId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ElastigroupAwsTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#key ElastigroupAws#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#value ElastigroupAws#value}
  */
  readonly value?: string;
}

export function elastigroupAwsTagsToTerraform(struct?: ElastigroupAwsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#action_type ElastigroupAws#action_type}
  */
  readonly actionType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#batch_num ElastigroupAws#batch_num}
  */
  readonly batchNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#draining_timeout ElastigroupAws#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#should_decrement_target_capacity ElastigroupAws#should_decrement_target_capacity}
  */
  readonly shouldDecrementTargetCapacity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#should_handle_all_batches ElastigroupAws#should_handle_all_batches}
  */
  readonly shouldHandleAllBatches?: boolean | cdktf.IResolvable;
}

export function elastigroupAwsUpdatePolicyRollConfigStrategyOnFailureToTerraform(struct?: ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailureOutputReference | ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    batch_num: cdktf.numberToTerraform(struct!.batchNum),
    draining_timeout: cdktf.numberToTerraform(struct!.drainingTimeout),
    should_decrement_target_capacity: cdktf.booleanToTerraform(struct!.shouldDecrementTargetCapacity),
    should_handle_all_batches: cdktf.booleanToTerraform(struct!.shouldHandleAllBatches),
  }
}

export class ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._batchNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchNum = this._batchNum;
    }
    if (this._drainingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainingTimeout = this._drainingTimeout;
    }
    if (this._shouldDecrementTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDecrementTargetCapacity = this._shouldDecrementTargetCapacity;
    }
    if (this._shouldHandleAllBatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldHandleAllBatches = this._shouldHandleAllBatches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionType = undefined;
      this._batchNum = undefined;
      this._drainingTimeout = undefined;
      this._shouldDecrementTargetCapacity = undefined;
      this._shouldHandleAllBatches = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionType = value.actionType;
      this._batchNum = value.batchNum;
      this._drainingTimeout = value.drainingTimeout;
      this._shouldDecrementTargetCapacity = value.shouldDecrementTargetCapacity;
      this._shouldHandleAllBatches = value.shouldHandleAllBatches;
    }
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // batch_num - computed: false, optional: true, required: false
  private _batchNum?: number; 
  public get batchNum() {
    return this.getNumberAttribute('batch_num');
  }
  public set batchNum(value: number) {
    this._batchNum = value;
  }
  public resetBatchNum() {
    this._batchNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchNumInput() {
    return this._batchNum;
  }

  // draining_timeout - computed: false, optional: true, required: false
  private _drainingTimeout?: number; 
  public get drainingTimeout() {
    return this.getNumberAttribute('draining_timeout');
  }
  public set drainingTimeout(value: number) {
    this._drainingTimeout = value;
  }
  public resetDrainingTimeout() {
    this._drainingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainingTimeoutInput() {
    return this._drainingTimeout;
  }

  // should_decrement_target_capacity - computed: false, optional: true, required: false
  private _shouldDecrementTargetCapacity?: boolean | cdktf.IResolvable; 
  public get shouldDecrementTargetCapacity() {
    return this.getBooleanAttribute('should_decrement_target_capacity');
  }
  public set shouldDecrementTargetCapacity(value: boolean | cdktf.IResolvable) {
    this._shouldDecrementTargetCapacity = value;
  }
  public resetShouldDecrementTargetCapacity() {
    this._shouldDecrementTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDecrementTargetCapacityInput() {
    return this._shouldDecrementTargetCapacity;
  }

  // should_handle_all_batches - computed: false, optional: true, required: false
  private _shouldHandleAllBatches?: boolean | cdktf.IResolvable; 
  public get shouldHandleAllBatches() {
    return this.getBooleanAttribute('should_handle_all_batches');
  }
  public set shouldHandleAllBatches(value: boolean | cdktf.IResolvable) {
    this._shouldHandleAllBatches = value;
  }
  public resetShouldHandleAllBatches() {
    this._shouldHandleAllBatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldHandleAllBatchesInput() {
    return this._shouldHandleAllBatches;
  }
}
export interface ElastigroupAwsUpdatePolicyRollConfigStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#action ElastigroupAws#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#batch_min_healthy_percentage ElastigroupAws#batch_min_healthy_percentage}
  */
  readonly batchMinHealthyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#should_drain_instances ElastigroupAws#should_drain_instances}
  */
  readonly shouldDrainInstances?: boolean | cdktf.IResolvable;
  /**
  * on_failure block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#on_failure ElastigroupAws#on_failure}
  */
  readonly onFailure?: ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailure;
}

export function elastigroupAwsUpdatePolicyRollConfigStrategyToTerraform(struct?: ElastigroupAwsUpdatePolicyRollConfigStrategyOutputReference | ElastigroupAwsUpdatePolicyRollConfigStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    batch_min_healthy_percentage: cdktf.numberToTerraform(struct!.batchMinHealthyPercentage),
    should_drain_instances: cdktf.booleanToTerraform(struct!.shouldDrainInstances),
    on_failure: elastigroupAwsUpdatePolicyRollConfigStrategyOnFailureToTerraform(struct!.onFailure),
  }
}

export class ElastigroupAwsUpdatePolicyRollConfigStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsUpdatePolicyRollConfigStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._batchMinHealthyPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMinHealthyPercentage = this._batchMinHealthyPercentage;
    }
    if (this._shouldDrainInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDrainInstances = this._shouldDrainInstances;
    }
    if (this._onFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsUpdatePolicyRollConfigStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._batchMinHealthyPercentage = undefined;
      this._shouldDrainInstances = undefined;
      this._onFailure.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._batchMinHealthyPercentage = value.batchMinHealthyPercentage;
      this._shouldDrainInstances = value.shouldDrainInstances;
      this._onFailure.internalValue = value.onFailure;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // batch_min_healthy_percentage - computed: false, optional: true, required: false
  private _batchMinHealthyPercentage?: number; 
  public get batchMinHealthyPercentage() {
    return this.getNumberAttribute('batch_min_healthy_percentage');
  }
  public set batchMinHealthyPercentage(value: number) {
    this._batchMinHealthyPercentage = value;
  }
  public resetBatchMinHealthyPercentage() {
    this._batchMinHealthyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchMinHealthyPercentageInput() {
    return this._batchMinHealthyPercentage;
  }

  // should_drain_instances - computed: false, optional: true, required: false
  private _shouldDrainInstances?: boolean | cdktf.IResolvable; 
  public get shouldDrainInstances() {
    return this.getBooleanAttribute('should_drain_instances');
  }
  public set shouldDrainInstances(value: boolean | cdktf.IResolvable) {
    this._shouldDrainInstances = value;
  }
  public resetShouldDrainInstances() {
    this._shouldDrainInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDrainInstancesInput() {
    return this._shouldDrainInstances;
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure = new ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailureOutputReference(this, "on_failure");
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailure) {
    this._onFailure.internalValue = value;
  }
  public resetOnFailure() {
    this._onFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure.internalValue;
  }
}
export interface ElastigroupAwsUpdatePolicyRollConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#batch_size_percentage ElastigroupAws#batch_size_percentage}
  */
  readonly batchSizePercentage: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#grace_period ElastigroupAws#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#health_check_type ElastigroupAws#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#wait_for_roll_percentage ElastigroupAws#wait_for_roll_percentage}
  */
  readonly waitForRollPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#wait_for_roll_timeout ElastigroupAws#wait_for_roll_timeout}
  */
  readonly waitForRollTimeout?: number;
  /**
  * strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#strategy ElastigroupAws#strategy}
  */
  readonly strategy?: ElastigroupAwsUpdatePolicyRollConfigStrategy;
}

export function elastigroupAwsUpdatePolicyRollConfigToTerraform(struct?: ElastigroupAwsUpdatePolicyRollConfigOutputReference | ElastigroupAwsUpdatePolicyRollConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size_percentage: cdktf.numberToTerraform(struct!.batchSizePercentage),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    health_check_type: cdktf.stringToTerraform(struct!.healthCheckType),
    wait_for_roll_percentage: cdktf.numberToTerraform(struct!.waitForRollPercentage),
    wait_for_roll_timeout: cdktf.numberToTerraform(struct!.waitForRollTimeout),
    strategy: elastigroupAwsUpdatePolicyRollConfigStrategyToTerraform(struct!.strategy),
  }
}

export class ElastigroupAwsUpdatePolicyRollConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsUpdatePolicyRollConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSizePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizePercentage = this._batchSizePercentage;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._healthCheckType !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckType = this._healthCheckType;
    }
    if (this._waitForRollPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForRollPercentage = this._waitForRollPercentage;
    }
    if (this._waitForRollTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForRollTimeout = this._waitForRollTimeout;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsUpdatePolicyRollConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchSizePercentage = undefined;
      this._gracePeriod = undefined;
      this._healthCheckType = undefined;
      this._waitForRollPercentage = undefined;
      this._waitForRollTimeout = undefined;
      this._strategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchSizePercentage = value.batchSizePercentage;
      this._gracePeriod = value.gracePeriod;
      this._healthCheckType = value.healthCheckType;
      this._waitForRollPercentage = value.waitForRollPercentage;
      this._waitForRollTimeout = value.waitForRollTimeout;
      this._strategy.internalValue = value.strategy;
    }
  }

  // batch_size_percentage - computed: false, optional: false, required: true
  private _batchSizePercentage?: number; 
  public get batchSizePercentage() {
    return this.getNumberAttribute('batch_size_percentage');
  }
  public set batchSizePercentage(value: number) {
    this._batchSizePercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizePercentageInput() {
    return this._batchSizePercentage;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // health_check_type - computed: false, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
  }

  // wait_for_roll_percentage - computed: false, optional: true, required: false
  private _waitForRollPercentage?: number; 
  public get waitForRollPercentage() {
    return this.getNumberAttribute('wait_for_roll_percentage');
  }
  public set waitForRollPercentage(value: number) {
    this._waitForRollPercentage = value;
  }
  public resetWaitForRollPercentage() {
    this._waitForRollPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRollPercentageInput() {
    return this._waitForRollPercentage;
  }

  // wait_for_roll_timeout - computed: false, optional: true, required: false
  private _waitForRollTimeout?: number; 
  public get waitForRollTimeout() {
    return this.getNumberAttribute('wait_for_roll_timeout');
  }
  public set waitForRollTimeout(value: number) {
    this._waitForRollTimeout = value;
  }
  public resetWaitForRollTimeout() {
    this._waitForRollTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRollTimeoutInput() {
    return this._waitForRollTimeout;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new ElastigroupAwsUpdatePolicyRollConfigStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: ElastigroupAwsUpdatePolicyRollConfigStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }
}
export interface ElastigroupAwsUpdatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#auto_apply_tags ElastigroupAws#auto_apply_tags}
  */
  readonly autoApplyTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#should_resume_stateful ElastigroupAws#should_resume_stateful}
  */
  readonly shouldResumeStateful: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#should_roll ElastigroupAws#should_roll}
  */
  readonly shouldRoll: boolean | cdktf.IResolvable;
  /**
  * roll_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws#roll_config ElastigroupAws#roll_config}
  */
  readonly rollConfig?: ElastigroupAwsUpdatePolicyRollConfig;
}

export function elastigroupAwsUpdatePolicyToTerraform(struct?: ElastigroupAwsUpdatePolicyOutputReference | ElastigroupAwsUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_apply_tags: cdktf.booleanToTerraform(struct!.autoApplyTags),
    should_resume_stateful: cdktf.booleanToTerraform(struct!.shouldResumeStateful),
    should_roll: cdktf.booleanToTerraform(struct!.shouldRoll),
    roll_config: elastigroupAwsUpdatePolicyRollConfigToTerraform(struct!.rollConfig),
  }
}

export class ElastigroupAwsUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoApplyTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoApplyTags = this._autoApplyTags;
    }
    if (this._shouldResumeStateful !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldResumeStateful = this._shouldResumeStateful;
    }
    if (this._shouldRoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldRoll = this._shouldRoll;
    }
    if (this._rollConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollConfig = this._rollConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoApplyTags = undefined;
      this._shouldResumeStateful = undefined;
      this._shouldRoll = undefined;
      this._rollConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoApplyTags = value.autoApplyTags;
      this._shouldResumeStateful = value.shouldResumeStateful;
      this._shouldRoll = value.shouldRoll;
      this._rollConfig.internalValue = value.rollConfig;
    }
  }

  // auto_apply_tags - computed: false, optional: true, required: false
  private _autoApplyTags?: boolean | cdktf.IResolvable; 
  public get autoApplyTags() {
    return this.getBooleanAttribute('auto_apply_tags');
  }
  public set autoApplyTags(value: boolean | cdktf.IResolvable) {
    this._autoApplyTags = value;
  }
  public resetAutoApplyTags() {
    this._autoApplyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApplyTagsInput() {
    return this._autoApplyTags;
  }

  // should_resume_stateful - computed: false, optional: false, required: true
  private _shouldResumeStateful?: boolean | cdktf.IResolvable; 
  public get shouldResumeStateful() {
    return this.getBooleanAttribute('should_resume_stateful');
  }
  public set shouldResumeStateful(value: boolean | cdktf.IResolvable) {
    this._shouldResumeStateful = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldResumeStatefulInput() {
    return this._shouldResumeStateful;
  }

  // should_roll - computed: false, optional: false, required: true
  private _shouldRoll?: boolean | cdktf.IResolvable; 
  public get shouldRoll() {
    return this.getBooleanAttribute('should_roll');
  }
  public set shouldRoll(value: boolean | cdktf.IResolvable) {
    this._shouldRoll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldRollInput() {
    return this._shouldRoll;
  }

  // roll_config - computed: false, optional: true, required: false
  private _rollConfig = new ElastigroupAwsUpdatePolicyRollConfigOutputReference(this, "roll_config");
  public get rollConfig() {
    return this._rollConfig;
  }
  public putRollConfig(value: ElastigroupAwsUpdatePolicyRollConfig) {
    this._rollConfig.internalValue = value;
  }
  public resetRollConfig() {
    this._rollConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollConfigInput() {
    return this._rollConfig.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws spotinst_elastigroup_aws}
*/
export class ElastigroupAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_elastigroup_aws";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws spotinst_elastigroup_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElastigroupAwsConfig
  */
  public constructor(scope: Construct, id: string, config: ElastigroupAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_elastigroup_aws',
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
    this._availabilityZones = config.availabilityZones;
    this._blockDevicesMode = config.blockDevicesMode;
    this._capacityUnit = config.capacityUnit;
    this._cpuCredits = config.cpuCredits;
    this._description = config.description;
    this._desiredCapacity = config.desiredCapacity;
    this._drainingTimeout = config.drainingTimeout;
    this._ebsOptimized = config.ebsOptimized;
    this._elasticIps = config.elasticIps;
    this._elasticLoadBalancers = config.elasticLoadBalancers;
    this._enableMonitoring = config.enableMonitoring;
    this._fallbackToOndemand = config.fallbackToOndemand;
    this._healthCheckGracePeriod = config.healthCheckGracePeriod;
    this._healthCheckType = config.healthCheckType;
    this._healthCheckUnhealthyDurationBeforeReplacement = config.healthCheckUnhealthyDurationBeforeReplacement;
    this._iamInstanceProfile = config.iamInstanceProfile;
    this._imageId = config.imageId;
    this._instanceTypesOndemand = config.instanceTypesOndemand;
    this._instanceTypesPreferredSpot = config.instanceTypesPreferredSpot;
    this._instanceTypesSpot = config.instanceTypesSpot;
    this._keyName = config.keyName;
    this._lifetimePeriod = config.lifetimePeriod;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._minimumInstanceLifetime = config.minimumInstanceLifetime;
    this._name = config.name;
    this._ondemandCount = config.ondemandCount;
    this._orientation = config.orientation;
    this._persistBlockDevices = config.persistBlockDevices;
    this._persistPrivateIp = config.persistPrivateIp;
    this._persistRootDevice = config.persistRootDevice;
    this._placementTenancy = config.placementTenancy;
    this._preferredAvailabilityZones = config.preferredAvailabilityZones;
    this._privateIps = config.privateIps;
    this._product = config.product;
    this._region = config.region;
    this._securityGroups = config.securityGroups;
    this._shutdownScript = config.shutdownScript;
    this._spotPercentage = config.spotPercentage;
    this._subnetIds = config.subnetIds;
    this._targetGroupArns = config.targetGroupArns;
    this._userData = config.userData;
    this._utilizeCommitments = config.utilizeCommitments;
    this._utilizeReservedInstances = config.utilizeReservedInstances;
    this._waitForCapacity = config.waitForCapacity;
    this._waitForCapacityTimeout = config.waitForCapacityTimeout;
    this._cpuOptions.internalValue = config.cpuOptions;
    this._ebsBlockDevice = config.ebsBlockDevice;
    this._ephemeralBlockDevice = config.ephemeralBlockDevice;
    this._instanceTypesWeights = config.instanceTypesWeights;
    this._integrationBeanstalk.internalValue = config.integrationBeanstalk;
    this._integrationCodedeploy.internalValue = config.integrationCodedeploy;
    this._integrationDockerSwarm.internalValue = config.integrationDockerSwarm;
    this._integrationEcs.internalValue = config.integrationEcs;
    this._integrationGitlab.internalValue = config.integrationGitlab;
    this._integrationKubernetes.internalValue = config.integrationKubernetes;
    this._integrationMesosphere.internalValue = config.integrationMesosphere;
    this._integrationMultaiRuntime.internalValue = config.integrationMultaiRuntime;
    this._integrationNomad.internalValue = config.integrationNomad;
    this._integrationRancher.internalValue = config.integrationRancher;
    this._integrationRoute53.internalValue = config.integrationRoute53;
    this._itf = config.itf;
    this._metadataOptions.internalValue = config.metadataOptions;
    this._multaiTargetSets = config.multaiTargetSets;
    this._multipleMetrics.internalValue = config.multipleMetrics;
    this._networkInterface = config.networkInterface;
    this._resourceTagSpecification = config.resourceTagSpecification;
    this._revertToSpot.internalValue = config.revertToSpot;
    this._scalingDownPolicy = config.scalingDownPolicy;
    this._scalingStrategy = config.scalingStrategy;
    this._scalingTargetPolicy = config.scalingTargetPolicy;
    this._scalingUpPolicy = config.scalingUpPolicy;
    this._scheduledTask = config.scheduledTask;
    this._signal = config.signal;
    this._statefulDeallocation.internalValue = config.statefulDeallocation;
    this._statefulInstanceAction = config.statefulInstanceAction;
    this._tags = config.tags;
    this._updatePolicy.internalValue = config.updatePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // block_devices_mode - computed: false, optional: true, required: false
  private _blockDevicesMode?: string; 
  public get blockDevicesMode() {
    return this.getStringAttribute('block_devices_mode');
  }
  public set blockDevicesMode(value: string) {
    this._blockDevicesMode = value;
  }
  public resetBlockDevicesMode() {
    this._blockDevicesMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDevicesModeInput() {
    return this._blockDevicesMode;
  }

  // capacity_unit - computed: true, optional: true, required: false
  private _capacityUnit?: string; 
  public get capacityUnit() {
    return this.getStringAttribute('capacity_unit');
  }
  public set capacityUnit(value: string) {
    this._capacityUnit = value;
  }
  public resetCapacityUnit() {
    this._capacityUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityUnitInput() {
    return this._capacityUnit;
  }

  // cpu_credits - computed: false, optional: true, required: false
  private _cpuCredits?: string; 
  public get cpuCredits() {
    return this.getStringAttribute('cpu_credits');
  }
  public set cpuCredits(value: string) {
    this._cpuCredits = value;
  }
  public resetCpuCredits() {
    this._cpuCredits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCreditsInput() {
    return this._cpuCredits;
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

  // desired_capacity - computed: false, optional: true, required: false
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // draining_timeout - computed: true, optional: true, required: false
  private _drainingTimeout?: number; 
  public get drainingTimeout() {
    return this.getNumberAttribute('draining_timeout');
  }
  public set drainingTimeout(value: number) {
    this._drainingTimeout = value;
  }
  public resetDrainingTimeout() {
    this._drainingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainingTimeoutInput() {
    return this._drainingTimeout;
  }

  // ebs_optimized - computed: true, optional: true, required: false
  private _ebsOptimized?: boolean | cdktf.IResolvable; 
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean | cdktf.IResolvable) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized;
  }

  // elastic_ips - computed: false, optional: true, required: false
  private _elasticIps?: string[]; 
  public get elasticIps() {
    return this.getListAttribute('elastic_ips');
  }
  public set elasticIps(value: string[]) {
    this._elasticIps = value;
  }
  public resetElasticIps() {
    this._elasticIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticIpsInput() {
    return this._elasticIps;
  }

  // elastic_load_balancers - computed: false, optional: true, required: false
  private _elasticLoadBalancers?: string[]; 
  public get elasticLoadBalancers() {
    return this.getListAttribute('elastic_load_balancers');
  }
  public set elasticLoadBalancers(value: string[]) {
    this._elasticLoadBalancers = value;
  }
  public resetElasticLoadBalancers() {
    this._elasticLoadBalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticLoadBalancersInput() {
    return this._elasticLoadBalancers;
  }

  // enable_monitoring - computed: false, optional: true, required: false
  private _enableMonitoring?: boolean | cdktf.IResolvable; 
  public get enableMonitoring() {
    return this.getBooleanAttribute('enable_monitoring');
  }
  public set enableMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableMonitoring = value;
  }
  public resetEnableMonitoring() {
    this._enableMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMonitoringInput() {
    return this._enableMonitoring;
  }

  // fallback_to_ondemand - computed: false, optional: false, required: true
  private _fallbackToOndemand?: boolean | cdktf.IResolvable; 
  public get fallbackToOndemand() {
    return this.getBooleanAttribute('fallback_to_ondemand');
  }
  public set fallbackToOndemand(value: boolean | cdktf.IResolvable) {
    this._fallbackToOndemand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToOndemandInput() {
    return this._fallbackToOndemand;
  }

  // health_check_grace_period - computed: false, optional: true, required: false
  private _healthCheckGracePeriod?: number; 
  public get healthCheckGracePeriod() {
    return this.getNumberAttribute('health_check_grace_period');
  }
  public set healthCheckGracePeriod(value: number) {
    this._healthCheckGracePeriod = value;
  }
  public resetHealthCheckGracePeriod() {
    this._healthCheckGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckGracePeriodInput() {
    return this._healthCheckGracePeriod;
  }

  // health_check_type - computed: false, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
  }

  // health_check_unhealthy_duration_before_replacement - computed: false, optional: true, required: false
  private _healthCheckUnhealthyDurationBeforeReplacement?: number; 
  public get healthCheckUnhealthyDurationBeforeReplacement() {
    return this.getNumberAttribute('health_check_unhealthy_duration_before_replacement');
  }
  public set healthCheckUnhealthyDurationBeforeReplacement(value: number) {
    this._healthCheckUnhealthyDurationBeforeReplacement = value;
  }
  public resetHealthCheckUnhealthyDurationBeforeReplacement() {
    this._healthCheckUnhealthyDurationBeforeReplacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckUnhealthyDurationBeforeReplacementInput() {
    return this._healthCheckUnhealthyDurationBeforeReplacement;
  }

  // iam_instance_profile - computed: false, optional: true, required: false
  private _iamInstanceProfile?: string; 
  public get iamInstanceProfile() {
    return this.getStringAttribute('iam_instance_profile');
  }
  public set iamInstanceProfile(value: string) {
    this._iamInstanceProfile = value;
  }
  public resetIamInstanceProfile() {
    this._iamInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInstanceProfileInput() {
    return this._iamInstanceProfile;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_types_ondemand - computed: false, optional: false, required: true
  private _instanceTypesOndemand?: string; 
  public get instanceTypesOndemand() {
    return this.getStringAttribute('instance_types_ondemand');
  }
  public set instanceTypesOndemand(value: string) {
    this._instanceTypesOndemand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesOndemandInput() {
    return this._instanceTypesOndemand;
  }

  // instance_types_preferred_spot - computed: false, optional: true, required: false
  private _instanceTypesPreferredSpot?: string[]; 
  public get instanceTypesPreferredSpot() {
    return this.getListAttribute('instance_types_preferred_spot');
  }
  public set instanceTypesPreferredSpot(value: string[]) {
    this._instanceTypesPreferredSpot = value;
  }
  public resetInstanceTypesPreferredSpot() {
    this._instanceTypesPreferredSpot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesPreferredSpotInput() {
    return this._instanceTypesPreferredSpot;
  }

  // instance_types_spot - computed: false, optional: false, required: true
  private _instanceTypesSpot?: string[]; 
  public get instanceTypesSpot() {
    return this.getListAttribute('instance_types_spot');
  }
  public set instanceTypesSpot(value: string[]) {
    this._instanceTypesSpot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesSpotInput() {
    return this._instanceTypesSpot;
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // lifetime_period - computed: false, optional: true, required: false
  private _lifetimePeriod?: string; 
  public get lifetimePeriod() {
    return this.getStringAttribute('lifetime_period');
  }
  public set lifetimePeriod(value: string) {
    this._lifetimePeriod = value;
  }
  public resetLifetimePeriod() {
    this._lifetimePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimePeriodInput() {
    return this._lifetimePeriod;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // minimum_instance_lifetime - computed: false, optional: true, required: false
  private _minimumInstanceLifetime?: number; 
  public get minimumInstanceLifetime() {
    return this.getNumberAttribute('minimum_instance_lifetime');
  }
  public set minimumInstanceLifetime(value: number) {
    this._minimumInstanceLifetime = value;
  }
  public resetMinimumInstanceLifetime() {
    this._minimumInstanceLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInstanceLifetimeInput() {
    return this._minimumInstanceLifetime;
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

  // ondemand_count - computed: false, optional: true, required: false
  private _ondemandCount?: number; 
  public get ondemandCount() {
    return this.getNumberAttribute('ondemand_count');
  }
  public set ondemandCount(value: number) {
    this._ondemandCount = value;
  }
  public resetOndemandCount() {
    this._ondemandCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ondemandCountInput() {
    return this._ondemandCount;
  }

  // orientation - computed: false, optional: false, required: true
  private _orientation?: string; 
  public get orientation() {
    return this.getStringAttribute('orientation');
  }
  public set orientation(value: string) {
    this._orientation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orientationInput() {
    return this._orientation;
  }

  // persist_block_devices - computed: false, optional: true, required: false
  private _persistBlockDevices?: boolean | cdktf.IResolvable; 
  public get persistBlockDevices() {
    return this.getBooleanAttribute('persist_block_devices');
  }
  public set persistBlockDevices(value: boolean | cdktf.IResolvable) {
    this._persistBlockDevices = value;
  }
  public resetPersistBlockDevices() {
    this._persistBlockDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistBlockDevicesInput() {
    return this._persistBlockDevices;
  }

  // persist_private_ip - computed: false, optional: true, required: false
  private _persistPrivateIp?: boolean | cdktf.IResolvable; 
  public get persistPrivateIp() {
    return this.getBooleanAttribute('persist_private_ip');
  }
  public set persistPrivateIp(value: boolean | cdktf.IResolvable) {
    this._persistPrivateIp = value;
  }
  public resetPersistPrivateIp() {
    this._persistPrivateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistPrivateIpInput() {
    return this._persistPrivateIp;
  }

  // persist_root_device - computed: false, optional: true, required: false
  private _persistRootDevice?: boolean | cdktf.IResolvable; 
  public get persistRootDevice() {
    return this.getBooleanAttribute('persist_root_device');
  }
  public set persistRootDevice(value: boolean | cdktf.IResolvable) {
    this._persistRootDevice = value;
  }
  public resetPersistRootDevice() {
    this._persistRootDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistRootDeviceInput() {
    return this._persistRootDevice;
  }

  // placement_tenancy - computed: false, optional: true, required: false
  private _placementTenancy?: string; 
  public get placementTenancy() {
    return this.getStringAttribute('placement_tenancy');
  }
  public set placementTenancy(value: string) {
    this._placementTenancy = value;
  }
  public resetPlacementTenancy() {
    this._placementTenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementTenancyInput() {
    return this._placementTenancy;
  }

  // preferred_availability_zones - computed: false, optional: true, required: false
  private _preferredAvailabilityZones?: string[]; 
  public get preferredAvailabilityZones() {
    return this.getListAttribute('preferred_availability_zones');
  }
  public set preferredAvailabilityZones(value: string[]) {
    this._preferredAvailabilityZones = value;
  }
  public resetPreferredAvailabilityZones() {
    this._preferredAvailabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredAvailabilityZonesInput() {
    return this._preferredAvailabilityZones;
  }

  // private_ips - computed: false, optional: true, required: false
  private _privateIps?: string[]; 
  public get privateIps() {
    return this.getListAttribute('private_ips');
  }
  public set privateIps(value: string[]) {
    this._privateIps = value;
  }
  public resetPrivateIps() {
    this._privateIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpsInput() {
    return this._privateIps;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
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

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // shutdown_script - computed: false, optional: true, required: false
  private _shutdownScript?: string; 
  public get shutdownScript() {
    return this.getStringAttribute('shutdown_script');
  }
  public set shutdownScript(value: string) {
    this._shutdownScript = value;
  }
  public resetShutdownScript() {
    this._shutdownScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownScriptInput() {
    return this._shutdownScript;
  }

  // spot_percentage - computed: false, optional: true, required: false
  private _spotPercentage?: number; 
  public get spotPercentage() {
    return this.getNumberAttribute('spot_percentage');
  }
  public set spotPercentage(value: number) {
    this._spotPercentage = value;
  }
  public resetSpotPercentage() {
    this._spotPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPercentageInput() {
    return this._spotPercentage;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // target_group_arns - computed: false, optional: true, required: false
  private _targetGroupArns?: string[]; 
  public get targetGroupArns() {
    return this.getListAttribute('target_group_arns');
  }
  public set targetGroupArns(value: string[]) {
    this._targetGroupArns = value;
  }
  public resetTargetGroupArns() {
    this._targetGroupArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnsInput() {
    return this._targetGroupArns;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // utilize_commitments - computed: false, optional: true, required: false
  private _utilizeCommitments?: boolean | cdktf.IResolvable; 
  public get utilizeCommitments() {
    return this.getBooleanAttribute('utilize_commitments');
  }
  public set utilizeCommitments(value: boolean | cdktf.IResolvable) {
    this._utilizeCommitments = value;
  }
  public resetUtilizeCommitments() {
    this._utilizeCommitments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizeCommitmentsInput() {
    return this._utilizeCommitments;
  }

  // utilize_reserved_instances - computed: false, optional: true, required: false
  private _utilizeReservedInstances?: boolean | cdktf.IResolvable; 
  public get utilizeReservedInstances() {
    return this.getBooleanAttribute('utilize_reserved_instances');
  }
  public set utilizeReservedInstances(value: boolean | cdktf.IResolvable) {
    this._utilizeReservedInstances = value;
  }
  public resetUtilizeReservedInstances() {
    this._utilizeReservedInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizeReservedInstancesInput() {
    return this._utilizeReservedInstances;
  }

  // wait_for_capacity - computed: false, optional: true, required: false
  private _waitForCapacity?: number; 
  public get waitForCapacity() {
    return this.getNumberAttribute('wait_for_capacity');
  }
  public set waitForCapacity(value: number) {
    this._waitForCapacity = value;
  }
  public resetWaitForCapacity() {
    this._waitForCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCapacityInput() {
    return this._waitForCapacity;
  }

  // wait_for_capacity_timeout - computed: false, optional: true, required: false
  private _waitForCapacityTimeout?: number; 
  public get waitForCapacityTimeout() {
    return this.getNumberAttribute('wait_for_capacity_timeout');
  }
  public set waitForCapacityTimeout(value: number) {
    this._waitForCapacityTimeout = value;
  }
  public resetWaitForCapacityTimeout() {
    this._waitForCapacityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCapacityTimeoutInput() {
    return this._waitForCapacityTimeout;
  }

  // cpu_options - computed: false, optional: true, required: false
  private _cpuOptions = new ElastigroupAwsCpuOptionsOutputReference(this, "cpu_options");
  public get cpuOptions() {
    return this._cpuOptions;
  }
  public putCpuOptions(value: ElastigroupAwsCpuOptions) {
    this._cpuOptions.internalValue = value;
  }
  public resetCpuOptions() {
    this._cpuOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuOptionsInput() {
    return this._cpuOptions.internalValue;
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice?: ElastigroupAwsEbsBlockDevice[] | cdktf.IResolvable; 
  public get ebsBlockDevice() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('ebs_block_device')));
  }
  public set ebsBlockDevice(value: ElastigroupAwsEbsBlockDevice[] | cdktf.IResolvable) {
    this._ebsBlockDevice = value;
  }
  public resetEbsBlockDevice() {
    this._ebsBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsBlockDeviceInput() {
    return this._ebsBlockDevice;
  }

  // ephemeral_block_device - computed: false, optional: true, required: false
  private _ephemeralBlockDevice?: ElastigroupAwsEphemeralBlockDevice[] | cdktf.IResolvable; 
  public get ephemeralBlockDevice() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('ephemeral_block_device')));
  }
  public set ephemeralBlockDevice(value: ElastigroupAwsEphemeralBlockDevice[] | cdktf.IResolvable) {
    this._ephemeralBlockDevice = value;
  }
  public resetEphemeralBlockDevice() {
    this._ephemeralBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralBlockDeviceInput() {
    return this._ephemeralBlockDevice;
  }

  // instance_types_weights - computed: false, optional: true, required: false
  private _instanceTypesWeights?: ElastigroupAwsInstanceTypesWeights[] | cdktf.IResolvable; 
  public get instanceTypesWeights() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('instance_types_weights')));
  }
  public set instanceTypesWeights(value: ElastigroupAwsInstanceTypesWeights[] | cdktf.IResolvable) {
    this._instanceTypesWeights = value;
  }
  public resetInstanceTypesWeights() {
    this._instanceTypesWeights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesWeightsInput() {
    return this._instanceTypesWeights;
  }

  // integration_beanstalk - computed: false, optional: true, required: false
  private _integrationBeanstalk = new ElastigroupAwsIntegrationBeanstalkOutputReference(this, "integration_beanstalk");
  public get integrationBeanstalk() {
    return this._integrationBeanstalk;
  }
  public putIntegrationBeanstalk(value: ElastigroupAwsIntegrationBeanstalk) {
    this._integrationBeanstalk.internalValue = value;
  }
  public resetIntegrationBeanstalk() {
    this._integrationBeanstalk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationBeanstalkInput() {
    return this._integrationBeanstalk.internalValue;
  }

  // integration_codedeploy - computed: false, optional: true, required: false
  private _integrationCodedeploy = new ElastigroupAwsIntegrationCodedeployOutputReference(this, "integration_codedeploy");
  public get integrationCodedeploy() {
    return this._integrationCodedeploy;
  }
  public putIntegrationCodedeploy(value: ElastigroupAwsIntegrationCodedeploy) {
    this._integrationCodedeploy.internalValue = value;
  }
  public resetIntegrationCodedeploy() {
    this._integrationCodedeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationCodedeployInput() {
    return this._integrationCodedeploy.internalValue;
  }

  // integration_docker_swarm - computed: false, optional: true, required: false
  private _integrationDockerSwarm = new ElastigroupAwsIntegrationDockerSwarmOutputReference(this, "integration_docker_swarm");
  public get integrationDockerSwarm() {
    return this._integrationDockerSwarm;
  }
  public putIntegrationDockerSwarm(value: ElastigroupAwsIntegrationDockerSwarm) {
    this._integrationDockerSwarm.internalValue = value;
  }
  public resetIntegrationDockerSwarm() {
    this._integrationDockerSwarm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationDockerSwarmInput() {
    return this._integrationDockerSwarm.internalValue;
  }

  // integration_ecs - computed: false, optional: true, required: false
  private _integrationEcs = new ElastigroupAwsIntegrationEcsOutputReference(this, "integration_ecs");
  public get integrationEcs() {
    return this._integrationEcs;
  }
  public putIntegrationEcs(value: ElastigroupAwsIntegrationEcs) {
    this._integrationEcs.internalValue = value;
  }
  public resetIntegrationEcs() {
    this._integrationEcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationEcsInput() {
    return this._integrationEcs.internalValue;
  }

  // integration_gitlab - computed: false, optional: true, required: false
  private _integrationGitlab = new ElastigroupAwsIntegrationGitlabOutputReference(this, "integration_gitlab");
  public get integrationGitlab() {
    return this._integrationGitlab;
  }
  public putIntegrationGitlab(value: ElastigroupAwsIntegrationGitlab) {
    this._integrationGitlab.internalValue = value;
  }
  public resetIntegrationGitlab() {
    this._integrationGitlab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationGitlabInput() {
    return this._integrationGitlab.internalValue;
  }

  // integration_kubernetes - computed: false, optional: true, required: false
  private _integrationKubernetes = new ElastigroupAwsIntegrationKubernetesOutputReference(this, "integration_kubernetes");
  public get integrationKubernetes() {
    return this._integrationKubernetes;
  }
  public putIntegrationKubernetes(value: ElastigroupAwsIntegrationKubernetes) {
    this._integrationKubernetes.internalValue = value;
  }
  public resetIntegrationKubernetes() {
    this._integrationKubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKubernetesInput() {
    return this._integrationKubernetes.internalValue;
  }

  // integration_mesosphere - computed: false, optional: true, required: false
  private _integrationMesosphere = new ElastigroupAwsIntegrationMesosphereOutputReference(this, "integration_mesosphere");
  public get integrationMesosphere() {
    return this._integrationMesosphere;
  }
  public putIntegrationMesosphere(value: ElastigroupAwsIntegrationMesosphere) {
    this._integrationMesosphere.internalValue = value;
  }
  public resetIntegrationMesosphere() {
    this._integrationMesosphere.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationMesosphereInput() {
    return this._integrationMesosphere.internalValue;
  }

  // integration_multai_runtime - computed: false, optional: true, required: false
  private _integrationMultaiRuntime = new ElastigroupAwsIntegrationMultaiRuntimeOutputReference(this, "integration_multai_runtime");
  public get integrationMultaiRuntime() {
    return this._integrationMultaiRuntime;
  }
  public putIntegrationMultaiRuntime(value: ElastigroupAwsIntegrationMultaiRuntime) {
    this._integrationMultaiRuntime.internalValue = value;
  }
  public resetIntegrationMultaiRuntime() {
    this._integrationMultaiRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationMultaiRuntimeInput() {
    return this._integrationMultaiRuntime.internalValue;
  }

  // integration_nomad - computed: false, optional: true, required: false
  private _integrationNomad = new ElastigroupAwsIntegrationNomadOutputReference(this, "integration_nomad");
  public get integrationNomad() {
    return this._integrationNomad;
  }
  public putIntegrationNomad(value: ElastigroupAwsIntegrationNomad) {
    this._integrationNomad.internalValue = value;
  }
  public resetIntegrationNomad() {
    this._integrationNomad.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationNomadInput() {
    return this._integrationNomad.internalValue;
  }

  // integration_rancher - computed: false, optional: true, required: false
  private _integrationRancher = new ElastigroupAwsIntegrationRancherOutputReference(this, "integration_rancher");
  public get integrationRancher() {
    return this._integrationRancher;
  }
  public putIntegrationRancher(value: ElastigroupAwsIntegrationRancher) {
    this._integrationRancher.internalValue = value;
  }
  public resetIntegrationRancher() {
    this._integrationRancher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationRancherInput() {
    return this._integrationRancher.internalValue;
  }

  // integration_route53 - computed: false, optional: true, required: false
  private _integrationRoute53 = new ElastigroupAwsIntegrationRoute53OutputReference(this, "integration_route53");
  public get integrationRoute53() {
    return this._integrationRoute53;
  }
  public putIntegrationRoute53(value: ElastigroupAwsIntegrationRoute53) {
    this._integrationRoute53.internalValue = value;
  }
  public resetIntegrationRoute53() {
    this._integrationRoute53.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationRoute53Input() {
    return this._integrationRoute53.internalValue;
  }

  // itf - computed: false, optional: true, required: false
  private _itf?: ElastigroupAwsItf[] | cdktf.IResolvable; 
  public get itf() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('itf');
  }
  public set itf(value: ElastigroupAwsItf[] | cdktf.IResolvable) {
    this._itf = value;
  }
  public resetItf() {
    this._itf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itfInput() {
    return this._itf;
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions = new ElastigroupAwsMetadataOptionsOutputReference(this, "metadata_options");
  public get metadataOptions() {
    return this._metadataOptions;
  }
  public putMetadataOptions(value: ElastigroupAwsMetadataOptions) {
    this._metadataOptions.internalValue = value;
  }
  public resetMetadataOptions() {
    this._metadataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOptionsInput() {
    return this._metadataOptions.internalValue;
  }

  // multai_target_sets - computed: false, optional: true, required: false
  private _multaiTargetSets?: ElastigroupAwsMultaiTargetSets[] | cdktf.IResolvable; 
  public get multaiTargetSets() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('multai_target_sets')));
  }
  public set multaiTargetSets(value: ElastigroupAwsMultaiTargetSets[] | cdktf.IResolvable) {
    this._multaiTargetSets = value;
  }
  public resetMultaiTargetSets() {
    this._multaiTargetSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multaiTargetSetsInput() {
    return this._multaiTargetSets;
  }

  // multiple_metrics - computed: false, optional: true, required: false
  private _multipleMetrics = new ElastigroupAwsMultipleMetricsOutputReference(this, "multiple_metrics");
  public get multipleMetrics() {
    return this._multipleMetrics;
  }
  public putMultipleMetrics(value: ElastigroupAwsMultipleMetrics) {
    this._multipleMetrics.internalValue = value;
  }
  public resetMultipleMetrics() {
    this._multipleMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleMetricsInput() {
    return this._multipleMetrics.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface?: ElastigroupAwsNetworkInterface[] | cdktf.IResolvable; 
  public get networkInterface() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('network_interface')));
  }
  public set networkInterface(value: ElastigroupAwsNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface = value;
  }
  public resetNetworkInterface() {
    this._networkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface;
  }

  // resource_tag_specification - computed: false, optional: true, required: false
  private _resourceTagSpecification?: ElastigroupAwsResourceTagSpecification[] | cdktf.IResolvable; 
  public get resourceTagSpecification() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_tag_specification');
  }
  public set resourceTagSpecification(value: ElastigroupAwsResourceTagSpecification[] | cdktf.IResolvable) {
    this._resourceTagSpecification = value;
  }
  public resetResourceTagSpecification() {
    this._resourceTagSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagSpecificationInput() {
    return this._resourceTagSpecification;
  }

  // revert_to_spot - computed: false, optional: true, required: false
  private _revertToSpot = new ElastigroupAwsRevertToSpotOutputReference(this, "revert_to_spot");
  public get revertToSpot() {
    return this._revertToSpot;
  }
  public putRevertToSpot(value: ElastigroupAwsRevertToSpot) {
    this._revertToSpot.internalValue = value;
  }
  public resetRevertToSpot() {
    this._revertToSpot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revertToSpotInput() {
    return this._revertToSpot.internalValue;
  }

  // scaling_down_policy - computed: false, optional: true, required: false
  private _scalingDownPolicy?: ElastigroupAwsScalingDownPolicy[] | cdktf.IResolvable; 
  public get scalingDownPolicy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scaling_down_policy')));
  }
  public set scalingDownPolicy(value: ElastigroupAwsScalingDownPolicy[] | cdktf.IResolvable) {
    this._scalingDownPolicy = value;
  }
  public resetScalingDownPolicy() {
    this._scalingDownPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingDownPolicyInput() {
    return this._scalingDownPolicy;
  }

  // scaling_strategy - computed: false, optional: true, required: false
  private _scalingStrategy?: ElastigroupAwsScalingStrategy[] | cdktf.IResolvable; 
  public get scalingStrategy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scaling_strategy');
  }
  public set scalingStrategy(value: ElastigroupAwsScalingStrategy[] | cdktf.IResolvable) {
    this._scalingStrategy = value;
  }
  public resetScalingStrategy() {
    this._scalingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingStrategyInput() {
    return this._scalingStrategy;
  }

  // scaling_target_policy - computed: false, optional: true, required: false
  private _scalingTargetPolicy?: ElastigroupAwsScalingTargetPolicy[] | cdktf.IResolvable; 
  public get scalingTargetPolicy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scaling_target_policy')));
  }
  public set scalingTargetPolicy(value: ElastigroupAwsScalingTargetPolicy[] | cdktf.IResolvable) {
    this._scalingTargetPolicy = value;
  }
  public resetScalingTargetPolicy() {
    this._scalingTargetPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTargetPolicyInput() {
    return this._scalingTargetPolicy;
  }

  // scaling_up_policy - computed: false, optional: true, required: false
  private _scalingUpPolicy?: ElastigroupAwsScalingUpPolicy[] | cdktf.IResolvable; 
  public get scalingUpPolicy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scaling_up_policy')));
  }
  public set scalingUpPolicy(value: ElastigroupAwsScalingUpPolicy[] | cdktf.IResolvable) {
    this._scalingUpPolicy = value;
  }
  public resetScalingUpPolicy() {
    this._scalingUpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingUpPolicyInput() {
    return this._scalingUpPolicy;
  }

  // scheduled_task - computed: false, optional: true, required: false
  private _scheduledTask?: ElastigroupAwsScheduledTask[] | cdktf.IResolvable; 
  public get scheduledTask() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scheduled_task')));
  }
  public set scheduledTask(value: ElastigroupAwsScheduledTask[] | cdktf.IResolvable) {
    this._scheduledTask = value;
  }
  public resetScheduledTask() {
    this._scheduledTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTaskInput() {
    return this._scheduledTask;
  }

  // signal - computed: false, optional: true, required: false
  private _signal?: ElastigroupAwsSignal[] | cdktf.IResolvable; 
  public get signal() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('signal')));
  }
  public set signal(value: ElastigroupAwsSignal[] | cdktf.IResolvable) {
    this._signal = value;
  }
  public resetSignal() {
    this._signal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal;
  }

  // stateful_deallocation - computed: false, optional: true, required: false
  private _statefulDeallocation = new ElastigroupAwsStatefulDeallocationOutputReference(this, "stateful_deallocation");
  public get statefulDeallocation() {
    return this._statefulDeallocation;
  }
  public putStatefulDeallocation(value: ElastigroupAwsStatefulDeallocation) {
    this._statefulDeallocation.internalValue = value;
  }
  public resetStatefulDeallocation() {
    this._statefulDeallocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulDeallocationInput() {
    return this._statefulDeallocation.internalValue;
  }

  // stateful_instance_action - computed: false, optional: true, required: false
  private _statefulInstanceAction?: ElastigroupAwsStatefulInstanceAction[] | cdktf.IResolvable; 
  public get statefulInstanceAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('stateful_instance_action');
  }
  public set statefulInstanceAction(value: ElastigroupAwsStatefulInstanceAction[] | cdktf.IResolvable) {
    this._statefulInstanceAction = value;
  }
  public resetStatefulInstanceAction() {
    this._statefulInstanceAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInstanceActionInput() {
    return this._statefulInstanceAction;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: ElastigroupAwsTags[] | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('tags')));
  }
  public set tags(value: ElastigroupAwsTags[] | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy = new ElastigroupAwsUpdatePolicyOutputReference(this, "update_policy");
  public get updatePolicy() {
    return this._updatePolicy;
  }
  public putUpdatePolicy(value: ElastigroupAwsUpdatePolicy) {
    this._updatePolicy.internalValue = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
      block_devices_mode: cdktf.stringToTerraform(this._blockDevicesMode),
      capacity_unit: cdktf.stringToTerraform(this._capacityUnit),
      cpu_credits: cdktf.stringToTerraform(this._cpuCredits),
      description: cdktf.stringToTerraform(this._description),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      draining_timeout: cdktf.numberToTerraform(this._drainingTimeout),
      ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
      elastic_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._elasticIps),
      elastic_load_balancers: cdktf.listMapper(cdktf.stringToTerraform)(this._elasticLoadBalancers),
      enable_monitoring: cdktf.booleanToTerraform(this._enableMonitoring),
      fallback_to_ondemand: cdktf.booleanToTerraform(this._fallbackToOndemand),
      health_check_grace_period: cdktf.numberToTerraform(this._healthCheckGracePeriod),
      health_check_type: cdktf.stringToTerraform(this._healthCheckType),
      health_check_unhealthy_duration_before_replacement: cdktf.numberToTerraform(this._healthCheckUnhealthyDurationBeforeReplacement),
      iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_types_ondemand: cdktf.stringToTerraform(this._instanceTypesOndemand),
      instance_types_preferred_spot: cdktf.listMapper(cdktf.stringToTerraform)(this._instanceTypesPreferredSpot),
      instance_types_spot: cdktf.listMapper(cdktf.stringToTerraform)(this._instanceTypesSpot),
      key_name: cdktf.stringToTerraform(this._keyName),
      lifetime_period: cdktf.stringToTerraform(this._lifetimePeriod),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      minimum_instance_lifetime: cdktf.numberToTerraform(this._minimumInstanceLifetime),
      name: cdktf.stringToTerraform(this._name),
      ondemand_count: cdktf.numberToTerraform(this._ondemandCount),
      orientation: cdktf.stringToTerraform(this._orientation),
      persist_block_devices: cdktf.booleanToTerraform(this._persistBlockDevices),
      persist_private_ip: cdktf.booleanToTerraform(this._persistPrivateIp),
      persist_root_device: cdktf.booleanToTerraform(this._persistRootDevice),
      placement_tenancy: cdktf.stringToTerraform(this._placementTenancy),
      preferred_availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredAvailabilityZones),
      private_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._privateIps),
      product: cdktf.stringToTerraform(this._product),
      region: cdktf.stringToTerraform(this._region),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
      shutdown_script: cdktf.stringToTerraform(this._shutdownScript),
      spot_percentage: cdktf.numberToTerraform(this._spotPercentage),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      target_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._targetGroupArns),
      user_data: cdktf.stringToTerraform(this._userData),
      utilize_commitments: cdktf.booleanToTerraform(this._utilizeCommitments),
      utilize_reserved_instances: cdktf.booleanToTerraform(this._utilizeReservedInstances),
      wait_for_capacity: cdktf.numberToTerraform(this._waitForCapacity),
      wait_for_capacity_timeout: cdktf.numberToTerraform(this._waitForCapacityTimeout),
      cpu_options: elastigroupAwsCpuOptionsToTerraform(this._cpuOptions.internalValue),
      ebs_block_device: cdktf.listMapper(elastigroupAwsEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
      ephemeral_block_device: cdktf.listMapper(elastigroupAwsEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
      instance_types_weights: cdktf.listMapper(elastigroupAwsInstanceTypesWeightsToTerraform)(this._instanceTypesWeights),
      integration_beanstalk: elastigroupAwsIntegrationBeanstalkToTerraform(this._integrationBeanstalk.internalValue),
      integration_codedeploy: elastigroupAwsIntegrationCodedeployToTerraform(this._integrationCodedeploy.internalValue),
      integration_docker_swarm: elastigroupAwsIntegrationDockerSwarmToTerraform(this._integrationDockerSwarm.internalValue),
      integration_ecs: elastigroupAwsIntegrationEcsToTerraform(this._integrationEcs.internalValue),
      integration_gitlab: elastigroupAwsIntegrationGitlabToTerraform(this._integrationGitlab.internalValue),
      integration_kubernetes: elastigroupAwsIntegrationKubernetesToTerraform(this._integrationKubernetes.internalValue),
      integration_mesosphere: elastigroupAwsIntegrationMesosphereToTerraform(this._integrationMesosphere.internalValue),
      integration_multai_runtime: elastigroupAwsIntegrationMultaiRuntimeToTerraform(this._integrationMultaiRuntime.internalValue),
      integration_nomad: elastigroupAwsIntegrationNomadToTerraform(this._integrationNomad.internalValue),
      integration_rancher: elastigroupAwsIntegrationRancherToTerraform(this._integrationRancher.internalValue),
      integration_route53: elastigroupAwsIntegrationRoute53ToTerraform(this._integrationRoute53.internalValue),
      itf: cdktf.listMapper(elastigroupAwsItfToTerraform)(this._itf),
      metadata_options: elastigroupAwsMetadataOptionsToTerraform(this._metadataOptions.internalValue),
      multai_target_sets: cdktf.listMapper(elastigroupAwsMultaiTargetSetsToTerraform)(this._multaiTargetSets),
      multiple_metrics: elastigroupAwsMultipleMetricsToTerraform(this._multipleMetrics.internalValue),
      network_interface: cdktf.listMapper(elastigroupAwsNetworkInterfaceToTerraform)(this._networkInterface),
      resource_tag_specification: cdktf.listMapper(elastigroupAwsResourceTagSpecificationToTerraform)(this._resourceTagSpecification),
      revert_to_spot: elastigroupAwsRevertToSpotToTerraform(this._revertToSpot.internalValue),
      scaling_down_policy: cdktf.listMapper(elastigroupAwsScalingDownPolicyToTerraform)(this._scalingDownPolicy),
      scaling_strategy: cdktf.listMapper(elastigroupAwsScalingStrategyToTerraform)(this._scalingStrategy),
      scaling_target_policy: cdktf.listMapper(elastigroupAwsScalingTargetPolicyToTerraform)(this._scalingTargetPolicy),
      scaling_up_policy: cdktf.listMapper(elastigroupAwsScalingUpPolicyToTerraform)(this._scalingUpPolicy),
      scheduled_task: cdktf.listMapper(elastigroupAwsScheduledTaskToTerraform)(this._scheduledTask),
      signal: cdktf.listMapper(elastigroupAwsSignalToTerraform)(this._signal),
      stateful_deallocation: elastigroupAwsStatefulDeallocationToTerraform(this._statefulDeallocation.internalValue),
      stateful_instance_action: cdktf.listMapper(elastigroupAwsStatefulInstanceActionToTerraform)(this._statefulInstanceAction),
      tags: cdktf.listMapper(elastigroupAwsTagsToTerraform)(this._tags),
      update_policy: elastigroupAwsUpdatePolicyToTerraform(this._updatePolicy.internalValue),
    };
  }
}
