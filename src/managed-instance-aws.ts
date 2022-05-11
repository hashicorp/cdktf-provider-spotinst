// https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedInstanceAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#auto_healing ManagedInstanceAws#auto_healing}
  */
  readonly autoHealing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#block_devices_mode ManagedInstanceAws#block_devices_mode}
  */
  readonly blockDevicesMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#cpu_credits ManagedInstanceAws#cpu_credits}
  */
  readonly cpuCredits?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#description ManagedInstanceAws#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#draining_timeout ManagedInstanceAws#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#ebs_optimized ManagedInstanceAws#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#elastic_ip ManagedInstanceAws#elastic_ip}
  */
  readonly elasticIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#enable_monitoring ManagedInstanceAws#enable_monitoring}
  */
  readonly enableMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#fall_back_to_od ManagedInstanceAws#fall_back_to_od}
  */
  readonly fallBackToOd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#grace_period ManagedInstanceAws#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#health_check_type ManagedInstanceAws#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#iam_instance_profile ManagedInstanceAws#iam_instance_profile}
  */
  readonly iamInstanceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#image_id ManagedInstanceAws#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#instance_types ManagedInstanceAws#instance_types}
  */
  readonly instanceTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#key_pair ManagedInstanceAws#key_pair}
  */
  readonly keyPair?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#life_cycle ManagedInstanceAws#life_cycle}
  */
  readonly lifeCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#minimum_instance_lifetime ManagedInstanceAws#minimum_instance_lifetime}
  */
  readonly minimumInstanceLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#name ManagedInstanceAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#optimization_windows ManagedInstanceAws#optimization_windows}
  */
  readonly optimizationWindows?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#orientation ManagedInstanceAws#orientation}
  */
  readonly orientation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#persist_block_devices ManagedInstanceAws#persist_block_devices}
  */
  readonly persistBlockDevices: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#persist_private_ip ManagedInstanceAws#persist_private_ip}
  */
  readonly persistPrivateIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#persist_root_device ManagedInstanceAws#persist_root_device}
  */
  readonly persistRootDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#placement_tenancy ManagedInstanceAws#placement_tenancy}
  */
  readonly placementTenancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#preferred_type ManagedInstanceAws#preferred_type}
  */
  readonly preferredType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#private_ip ManagedInstanceAws#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#product ManagedInstanceAws#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#region ManagedInstanceAws#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#security_group_ids ManagedInstanceAws#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#shutdown_script ManagedInstanceAws#shutdown_script}
  */
  readonly shutdownScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#subnet_ids ManagedInstanceAws#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#unhealthy_duration ManagedInstanceAws#unhealthy_duration}
  */
  readonly unhealthyDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#user_data ManagedInstanceAws#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#utilize_reserved_instances ManagedInstanceAws#utilize_reserved_instances}
  */
  readonly utilizeReservedInstances?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#vpc_id ManagedInstanceAws#vpc_id}
  */
  readonly vpcId: string;
  /**
  * block_device_mappings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#block_device_mappings ManagedInstanceAws#block_device_mappings}
  */
  readonly blockDeviceMappings?: ManagedInstanceAwsBlockDeviceMappings[] | cdktf.IResolvable;
  /**
  * integration_route53 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#integration_route53 ManagedInstanceAws#integration_route53}
  */
  readonly integrationRoute53?: ManagedInstanceAwsIntegrationRoute53;
  /**
  * load_balancers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#load_balancers ManagedInstanceAws#load_balancers}
  */
  readonly loadBalancers?: ManagedInstanceAwsLoadBalancers[] | cdktf.IResolvable;
  /**
  * managed_instance_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#managed_instance_action ManagedInstanceAws#managed_instance_action}
  */
  readonly managedInstanceAction?: ManagedInstanceAwsManagedInstanceAction;
  /**
  * network_interface block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#network_interface ManagedInstanceAws#network_interface}
  */
  readonly networkInterface?: ManagedInstanceAwsNetworkInterface[] | cdktf.IResolvable;
  /**
  * resource_tag_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#resource_tag_specification ManagedInstanceAws#resource_tag_specification}
  */
  readonly resourceTagSpecification?: ManagedInstanceAwsResourceTagSpecification[] | cdktf.IResolvable;
  /**
  * revert_to_spot block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#revert_to_spot ManagedInstanceAws#revert_to_spot}
  */
  readonly revertToSpot?: ManagedInstanceAwsRevertToSpot;
  /**
  * scheduled_task block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#scheduled_task ManagedInstanceAws#scheduled_task}
  */
  readonly scheduledTask?: ManagedInstanceAwsScheduledTask[] | cdktf.IResolvable;
  /**
  * tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#tags ManagedInstanceAws#tags}
  */
  readonly tags?: ManagedInstanceAwsTags[] | cdktf.IResolvable;
}
export interface ManagedInstanceAwsBlockDeviceMappingsEbs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#delete_on_termination ManagedInstanceAws#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#iops ManagedInstanceAws#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#throughput ManagedInstanceAws#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#volume_size ManagedInstanceAws#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#volume_type ManagedInstanceAws#volume_type}
  */
  readonly volumeType?: string;
}

export function managedInstanceAwsBlockDeviceMappingsEbsToTerraform(struct?: ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference | ManagedInstanceAwsBlockDeviceMappingsEbs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    iops: cdktf.numberToTerraform(struct!.iops),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export class ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedInstanceAwsBlockDeviceMappingsEbs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstanceAwsBlockDeviceMappingsEbs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteOnTermination = undefined;
      this._iops = undefined;
      this._throughput = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteOnTermination = value.deleteOnTermination;
      this._iops = value.iops;
      this._throughput = value.throughput;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // delete_on_termination - computed: true, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // throughput - computed: false, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface ManagedInstanceAwsBlockDeviceMappings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#device_name ManagedInstanceAws#device_name}
  */
  readonly deviceName: string;
  /**
  * ebs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#ebs ManagedInstanceAws#ebs}
  */
  readonly ebs?: ManagedInstanceAwsBlockDeviceMappingsEbs;
}

export function managedInstanceAwsBlockDeviceMappingsToTerraform(struct?: ManagedInstanceAwsBlockDeviceMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    ebs: managedInstanceAwsBlockDeviceMappingsEbsToTerraform(struct!.ebs),
  }
}

export interface ManagedInstanceAwsIntegrationRoute53DomainsRecordSets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#name ManagedInstanceAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#use_public_dns ManagedInstanceAws#use_public_dns}
  */
  readonly usePublicDns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#use_public_ip ManagedInstanceAws#use_public_ip}
  */
  readonly usePublicIp?: boolean | cdktf.IResolvable;
}

export function managedInstanceAwsIntegrationRoute53DomainsRecordSetsToTerraform(struct?: ManagedInstanceAwsIntegrationRoute53DomainsRecordSets | cdktf.IResolvable): any {
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

export interface ManagedInstanceAwsIntegrationRoute53Domains {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#hosted_zone_id ManagedInstanceAws#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#record_set_type ManagedInstanceAws#record_set_type}
  */
  readonly recordSetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#spotinst_acct_id ManagedInstanceAws#spotinst_acct_id}
  */
  readonly spotinstAcctId?: string;
  /**
  * record_sets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#record_sets ManagedInstanceAws#record_sets}
  */
  readonly recordSets: ManagedInstanceAwsIntegrationRoute53DomainsRecordSets[] | cdktf.IResolvable;
}

export function managedInstanceAwsIntegrationRoute53DomainsToTerraform(struct?: ManagedInstanceAwsIntegrationRoute53Domains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosted_zone_id: cdktf.stringToTerraform(struct!.hostedZoneId),
    record_set_type: cdktf.stringToTerraform(struct!.recordSetType),
    spotinst_acct_id: cdktf.stringToTerraform(struct!.spotinstAcctId),
    record_sets: cdktf.listMapper(managedInstanceAwsIntegrationRoute53DomainsRecordSetsToTerraform)(struct!.recordSets),
  }
}

export interface ManagedInstanceAwsIntegrationRoute53 {
  /**
  * domains block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#domains ManagedInstanceAws#domains}
  */
  readonly domains: ManagedInstanceAwsIntegrationRoute53Domains[] | cdktf.IResolvable;
}

export function managedInstanceAwsIntegrationRoute53ToTerraform(struct?: ManagedInstanceAwsIntegrationRoute53OutputReference | ManagedInstanceAwsIntegrationRoute53): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(managedInstanceAwsIntegrationRoute53DomainsToTerraform)(struct!.domains),
  }
}

export class ManagedInstanceAwsIntegrationRoute53OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedInstanceAwsIntegrationRoute53 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstanceAwsIntegrationRoute53 | undefined) {
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
  private _domains?: ManagedInstanceAwsIntegrationRoute53Domains[] | cdktf.IResolvable; 
  public get domains() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('domains')));
  }
  public set domains(value: ManagedInstanceAwsIntegrationRoute53Domains[] | cdktf.IResolvable) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }
}
export interface ManagedInstanceAwsLoadBalancers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#arn ManagedInstanceAws#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#auto_weight ManagedInstanceAws#auto_weight}
  */
  readonly autoWeight?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#az_awareness ManagedInstanceAws#az_awareness}
  */
  readonly azAwareness?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#balancer_id ManagedInstanceAws#balancer_id}
  */
  readonly balancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#name ManagedInstanceAws#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#target_set_id ManagedInstanceAws#target_set_id}
  */
  readonly targetSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#type ManagedInstanceAws#type}
  */
  readonly type: string;
}

export function managedInstanceAwsLoadBalancersToTerraform(struct?: ManagedInstanceAwsLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    auto_weight: cdktf.booleanToTerraform(struct!.autoWeight),
    az_awareness: cdktf.booleanToTerraform(struct!.azAwareness),
    balancer_id: cdktf.stringToTerraform(struct!.balancerId),
    name: cdktf.stringToTerraform(struct!.name),
    target_set_id: cdktf.stringToTerraform(struct!.targetSetId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ManagedInstanceAwsManagedInstanceAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#type ManagedInstanceAws#type}
  */
  readonly type: string;
}

export function managedInstanceAwsManagedInstanceActionToTerraform(struct?: ManagedInstanceAwsManagedInstanceActionOutputReference | ManagedInstanceAwsManagedInstanceAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ManagedInstanceAwsManagedInstanceActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedInstanceAwsManagedInstanceAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstanceAwsManagedInstanceAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
export interface ManagedInstanceAwsNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#associate_ipv6_address ManagedInstanceAws#associate_ipv6_address}
  */
  readonly associateIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#associate_public_ip_address ManagedInstanceAws#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#device_index ManagedInstanceAws#device_index}
  */
  readonly deviceIndex: string;
}

export function managedInstanceAwsNetworkInterfaceToTerraform(struct?: ManagedInstanceAwsNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associate_ipv6_address: cdktf.booleanToTerraform(struct!.associateIpv6Address),
    associate_public_ip_address: cdktf.booleanToTerraform(struct!.associatePublicIpAddress),
    device_index: cdktf.stringToTerraform(struct!.deviceIndex),
  }
}

export interface ManagedInstanceAwsResourceTagSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#should_tag_amis ManagedInstanceAws#should_tag_amis}
  */
  readonly shouldTagAmis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#should_tag_enis ManagedInstanceAws#should_tag_enis}
  */
  readonly shouldTagEnis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#should_tag_snapshots ManagedInstanceAws#should_tag_snapshots}
  */
  readonly shouldTagSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#should_tag_volumes ManagedInstanceAws#should_tag_volumes}
  */
  readonly shouldTagVolumes?: boolean | cdktf.IResolvable;
}

export function managedInstanceAwsResourceTagSpecificationToTerraform(struct?: ManagedInstanceAwsResourceTagSpecification | cdktf.IResolvable): any {
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

export interface ManagedInstanceAwsRevertToSpot {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#perform_at ManagedInstanceAws#perform_at}
  */
  readonly performAt: string;
}

export function managedInstanceAwsRevertToSpotToTerraform(struct?: ManagedInstanceAwsRevertToSpotOutputReference | ManagedInstanceAwsRevertToSpot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perform_at: cdktf.stringToTerraform(struct!.performAt),
  }
}

export class ManagedInstanceAwsRevertToSpotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedInstanceAwsRevertToSpot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._performAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.performAt = this._performAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstanceAwsRevertToSpot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._performAt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._performAt = value.performAt;
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
}
export interface ManagedInstanceAwsScheduledTask {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#cron_expression ManagedInstanceAws#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#frequency ManagedInstanceAws#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#is_enabled ManagedInstanceAws#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#start_time ManagedInstanceAws#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#task_type ManagedInstanceAws#task_type}
  */
  readonly taskType: string;
}

export function managedInstanceAwsScheduledTaskToTerraform(struct?: ManagedInstanceAwsScheduledTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}

export interface ManagedInstanceAwsTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#key ManagedInstanceAws#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws#value ManagedInstanceAws#value}
  */
  readonly value?: string;
}

export function managedInstanceAwsTagsToTerraform(struct?: ManagedInstanceAwsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws spotinst_managed_instance_aws}
*/
export class ManagedInstanceAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_managed_instance_aws";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/managed_instance_aws spotinst_managed_instance_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedInstanceAwsConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedInstanceAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_managed_instance_aws',
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
    this._autoHealing = config.autoHealing;
    this._blockDevicesMode = config.blockDevicesMode;
    this._cpuCredits = config.cpuCredits;
    this._description = config.description;
    this._drainingTimeout = config.drainingTimeout;
    this._ebsOptimized = config.ebsOptimized;
    this._elasticIp = config.elasticIp;
    this._enableMonitoring = config.enableMonitoring;
    this._fallBackToOd = config.fallBackToOd;
    this._gracePeriod = config.gracePeriod;
    this._healthCheckType = config.healthCheckType;
    this._iamInstanceProfile = config.iamInstanceProfile;
    this._imageId = config.imageId;
    this._instanceTypes = config.instanceTypes;
    this._keyPair = config.keyPair;
    this._lifeCycle = config.lifeCycle;
    this._minimumInstanceLifetime = config.minimumInstanceLifetime;
    this._name = config.name;
    this._optimizationWindows = config.optimizationWindows;
    this._orientation = config.orientation;
    this._persistBlockDevices = config.persistBlockDevices;
    this._persistPrivateIp = config.persistPrivateIp;
    this._persistRootDevice = config.persistRootDevice;
    this._placementTenancy = config.placementTenancy;
    this._preferredType = config.preferredType;
    this._privateIp = config.privateIp;
    this._product = config.product;
    this._region = config.region;
    this._securityGroupIds = config.securityGroupIds;
    this._shutdownScript = config.shutdownScript;
    this._subnetIds = config.subnetIds;
    this._unhealthyDuration = config.unhealthyDuration;
    this._userData = config.userData;
    this._utilizeReservedInstances = config.utilizeReservedInstances;
    this._vpcId = config.vpcId;
    this._blockDeviceMappings = config.blockDeviceMappings;
    this._integrationRoute53.internalValue = config.integrationRoute53;
    this._loadBalancers = config.loadBalancers;
    this._managedInstanceAction.internalValue = config.managedInstanceAction;
    this._networkInterface = config.networkInterface;
    this._resourceTagSpecification = config.resourceTagSpecification;
    this._revertToSpot.internalValue = config.revertToSpot;
    this._scheduledTask = config.scheduledTask;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_healing - computed: false, optional: true, required: false
  private _autoHealing?: boolean | cdktf.IResolvable; 
  public get autoHealing() {
    return this.getBooleanAttribute('auto_healing');
  }
  public set autoHealing(value: boolean | cdktf.IResolvable) {
    this._autoHealing = value;
  }
  public resetAutoHealing() {
    this._autoHealing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealingInput() {
    return this._autoHealing;
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

  // elastic_ip - computed: false, optional: true, required: false
  private _elasticIp?: string; 
  public get elasticIp() {
    return this.getStringAttribute('elastic_ip');
  }
  public set elasticIp(value: string) {
    this._elasticIp = value;
  }
  public resetElasticIp() {
    this._elasticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticIpInput() {
    return this._elasticIp;
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

  // fall_back_to_od - computed: false, optional: true, required: false
  private _fallBackToOd?: boolean | cdktf.IResolvable; 
  public get fallBackToOd() {
    return this.getBooleanAttribute('fall_back_to_od');
  }
  public set fallBackToOd(value: boolean | cdktf.IResolvable) {
    this._fallBackToOd = value;
  }
  public resetFallBackToOd() {
    this._fallBackToOd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallBackToOdInput() {
    return this._fallBackToOd;
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

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_types - computed: false, optional: false, required: true
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
  }

  // key_pair - computed: false, optional: true, required: false
  private _keyPair?: string; 
  public get keyPair() {
    return this.getStringAttribute('key_pair');
  }
  public set keyPair(value: string) {
    this._keyPair = value;
  }
  public resetKeyPair() {
    this._keyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairInput() {
    return this._keyPair;
  }

  // life_cycle - computed: false, optional: true, required: false
  private _lifeCycle?: string; 
  public get lifeCycle() {
    return this.getStringAttribute('life_cycle');
  }
  public set lifeCycle(value: string) {
    this._lifeCycle = value;
  }
  public resetLifeCycle() {
    this._lifeCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifeCycleInput() {
    return this._lifeCycle;
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

  // optimization_windows - computed: false, optional: true, required: false
  private _optimizationWindows?: string[]; 
  public get optimizationWindows() {
    return this.getListAttribute('optimization_windows');
  }
  public set optimizationWindows(value: string[]) {
    this._optimizationWindows = value;
  }
  public resetOptimizationWindows() {
    this._optimizationWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizationWindowsInput() {
    return this._optimizationWindows;
  }

  // orientation - computed: false, optional: true, required: false
  private _orientation?: string; 
  public get orientation() {
    return this.getStringAttribute('orientation');
  }
  public set orientation(value: string) {
    this._orientation = value;
  }
  public resetOrientation() {
    this._orientation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orientationInput() {
    return this._orientation;
  }

  // persist_block_devices - computed: false, optional: false, required: true
  private _persistBlockDevices?: boolean | cdktf.IResolvable; 
  public get persistBlockDevices() {
    return this.getBooleanAttribute('persist_block_devices');
  }
  public set persistBlockDevices(value: boolean | cdktf.IResolvable) {
    this._persistBlockDevices = value;
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

  // preferred_type - computed: false, optional: true, required: false
  private _preferredType?: string; 
  public get preferredType() {
    return this.getStringAttribute('preferred_type');
  }
  public set preferredType(value: string) {
    this._preferredType = value;
  }
  public resetPreferredType() {
    this._preferredType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredTypeInput() {
    return this._preferredType;
  }

  // private_ip - computed: false, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
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

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
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

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // unhealthy_duration - computed: false, optional: true, required: false
  private _unhealthyDuration?: number; 
  public get unhealthyDuration() {
    return this.getNumberAttribute('unhealthy_duration');
  }
  public set unhealthyDuration(value: number) {
    this._unhealthyDuration = value;
  }
  public resetUnhealthyDuration() {
    this._unhealthyDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyDurationInput() {
    return this._unhealthyDuration;
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // block_device_mappings - computed: false, optional: true, required: false
  private _blockDeviceMappings?: ManagedInstanceAwsBlockDeviceMappings[] | cdktf.IResolvable; 
  public get blockDeviceMappings() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('block_device_mappings');
  }
  public set blockDeviceMappings(value: ManagedInstanceAwsBlockDeviceMappings[] | cdktf.IResolvable) {
    this._blockDeviceMappings = value;
  }
  public resetBlockDeviceMappings() {
    this._blockDeviceMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceMappingsInput() {
    return this._blockDeviceMappings;
  }

  // integration_route53 - computed: false, optional: true, required: false
  private _integrationRoute53 = new ManagedInstanceAwsIntegrationRoute53OutputReference(this, "integration_route53");
  public get integrationRoute53() {
    return this._integrationRoute53;
  }
  public putIntegrationRoute53(value: ManagedInstanceAwsIntegrationRoute53) {
    this._integrationRoute53.internalValue = value;
  }
  public resetIntegrationRoute53() {
    this._integrationRoute53.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationRoute53Input() {
    return this._integrationRoute53.internalValue;
  }

  // load_balancers - computed: false, optional: true, required: false
  private _loadBalancers?: ManagedInstanceAwsLoadBalancers[] | cdktf.IResolvable; 
  public get loadBalancers() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('load_balancers')));
  }
  public set loadBalancers(value: ManagedInstanceAwsLoadBalancers[] | cdktf.IResolvable) {
    this._loadBalancers = value;
  }
  public resetLoadBalancers() {
    this._loadBalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancersInput() {
    return this._loadBalancers;
  }

  // managed_instance_action - computed: false, optional: true, required: false
  private _managedInstanceAction = new ManagedInstanceAwsManagedInstanceActionOutputReference(this, "managed_instance_action");
  public get managedInstanceAction() {
    return this._managedInstanceAction;
  }
  public putManagedInstanceAction(value: ManagedInstanceAwsManagedInstanceAction) {
    this._managedInstanceAction.internalValue = value;
  }
  public resetManagedInstanceAction() {
    this._managedInstanceAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceActionInput() {
    return this._managedInstanceAction.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface?: ManagedInstanceAwsNetworkInterface[] | cdktf.IResolvable; 
  public get networkInterface() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('network_interface')));
  }
  public set networkInterface(value: ManagedInstanceAwsNetworkInterface[] | cdktf.IResolvable) {
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
  private _resourceTagSpecification?: ManagedInstanceAwsResourceTagSpecification[] | cdktf.IResolvable; 
  public get resourceTagSpecification() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_tag_specification');
  }
  public set resourceTagSpecification(value: ManagedInstanceAwsResourceTagSpecification[] | cdktf.IResolvable) {
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
  private _revertToSpot = new ManagedInstanceAwsRevertToSpotOutputReference(this, "revert_to_spot");
  public get revertToSpot() {
    return this._revertToSpot;
  }
  public putRevertToSpot(value: ManagedInstanceAwsRevertToSpot) {
    this._revertToSpot.internalValue = value;
  }
  public resetRevertToSpot() {
    this._revertToSpot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revertToSpotInput() {
    return this._revertToSpot.internalValue;
  }

  // scheduled_task - computed: false, optional: true, required: false
  private _scheduledTask?: ManagedInstanceAwsScheduledTask[] | cdktf.IResolvable; 
  public get scheduledTask() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scheduled_task')));
  }
  public set scheduledTask(value: ManagedInstanceAwsScheduledTask[] | cdktf.IResolvable) {
    this._scheduledTask = value;
  }
  public resetScheduledTask() {
    this._scheduledTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTaskInput() {
    return this._scheduledTask;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: ManagedInstanceAwsTags[] | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('tags')));
  }
  public set tags(value: ManagedInstanceAwsTags[] | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_healing: cdktf.booleanToTerraform(this._autoHealing),
      block_devices_mode: cdktf.stringToTerraform(this._blockDevicesMode),
      cpu_credits: cdktf.stringToTerraform(this._cpuCredits),
      description: cdktf.stringToTerraform(this._description),
      draining_timeout: cdktf.numberToTerraform(this._drainingTimeout),
      ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
      elastic_ip: cdktf.stringToTerraform(this._elasticIp),
      enable_monitoring: cdktf.booleanToTerraform(this._enableMonitoring),
      fall_back_to_od: cdktf.booleanToTerraform(this._fallBackToOd),
      grace_period: cdktf.numberToTerraform(this._gracePeriod),
      health_check_type: cdktf.stringToTerraform(this._healthCheckType),
      iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_types: cdktf.listMapper(cdktf.stringToTerraform)(this._instanceTypes),
      key_pair: cdktf.stringToTerraform(this._keyPair),
      life_cycle: cdktf.stringToTerraform(this._lifeCycle),
      minimum_instance_lifetime: cdktf.numberToTerraform(this._minimumInstanceLifetime),
      name: cdktf.stringToTerraform(this._name),
      optimization_windows: cdktf.listMapper(cdktf.stringToTerraform)(this._optimizationWindows),
      orientation: cdktf.stringToTerraform(this._orientation),
      persist_block_devices: cdktf.booleanToTerraform(this._persistBlockDevices),
      persist_private_ip: cdktf.booleanToTerraform(this._persistPrivateIp),
      persist_root_device: cdktf.booleanToTerraform(this._persistRootDevice),
      placement_tenancy: cdktf.stringToTerraform(this._placementTenancy),
      preferred_type: cdktf.stringToTerraform(this._preferredType),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      product: cdktf.stringToTerraform(this._product),
      region: cdktf.stringToTerraform(this._region),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
      shutdown_script: cdktf.stringToTerraform(this._shutdownScript),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      unhealthy_duration: cdktf.numberToTerraform(this._unhealthyDuration),
      user_data: cdktf.stringToTerraform(this._userData),
      utilize_reserved_instances: cdktf.booleanToTerraform(this._utilizeReservedInstances),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      block_device_mappings: cdktf.listMapper(managedInstanceAwsBlockDeviceMappingsToTerraform)(this._blockDeviceMappings),
      integration_route53: managedInstanceAwsIntegrationRoute53ToTerraform(this._integrationRoute53.internalValue),
      load_balancers: cdktf.listMapper(managedInstanceAwsLoadBalancersToTerraform)(this._loadBalancers),
      managed_instance_action: managedInstanceAwsManagedInstanceActionToTerraform(this._managedInstanceAction.internalValue),
      network_interface: cdktf.listMapper(managedInstanceAwsNetworkInterfaceToTerraform)(this._networkInterface),
      resource_tag_specification: cdktf.listMapper(managedInstanceAwsResourceTagSpecificationToTerraform)(this._resourceTagSpecification),
      revert_to_spot: managedInstanceAwsRevertToSpotToTerraform(this._revertToSpot.internalValue),
      scheduled_task: cdktf.listMapper(managedInstanceAwsScheduledTaskToTerraform)(this._scheduledTask),
      tags: cdktf.listMapper(managedInstanceAwsTagsToTerraform)(this._tags),
    };
  }
}
