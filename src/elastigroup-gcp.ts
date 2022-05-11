// https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElastigroupGcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#auto_healing ElastigroupGcp#auto_healing}
  */
  readonly autoHealing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#availability_zones ElastigroupGcp#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#description ElastigroupGcp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#desired_capacity ElastigroupGcp#desired_capacity}
  */
  readonly desiredCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#draining_timeout ElastigroupGcp#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#fallback_to_ondemand ElastigroupGcp#fallback_to_ondemand}
  */
  readonly fallbackToOndemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#health_check_grace_period ElastigroupGcp#health_check_grace_period}
  */
  readonly healthCheckGracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#health_check_type ElastigroupGcp#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#instance_types_ondemand ElastigroupGcp#instance_types_ondemand}
  */
  readonly instanceTypesOndemand?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#instance_types_preemptible ElastigroupGcp#instance_types_preemptible}
  */
  readonly instanceTypesPreemptible?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#ip_forwarding ElastigroupGcp#ip_forwarding}
  */
  readonly ipForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#max_size ElastigroupGcp#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#min_size ElastigroupGcp#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#name ElastigroupGcp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#ondemand_count ElastigroupGcp#ondemand_count}
  */
  readonly ondemandCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#preemptible_percentage ElastigroupGcp#preemptible_percentage}
  */
  readonly preemptiblePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#provisioning_model ElastigroupGcp#provisioning_model}
  */
  readonly provisioningModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#service_account ElastigroupGcp#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#shutdown_script ElastigroupGcp#shutdown_script}
  */
  readonly shutdownScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#startup_script ElastigroupGcp#startup_script}
  */
  readonly startupScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#tags ElastigroupGcp#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#unhealthy_duration ElastigroupGcp#unhealthy_duration}
  */
  readonly unhealthyDuration?: number;
  /**
  * backend_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#backend_services ElastigroupGcp#backend_services}
  */
  readonly backendServices?: ElastigroupGcpBackendServices[] | cdktf.IResolvable;
  /**
  * disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#disk ElastigroupGcp#disk}
  */
  readonly disk?: ElastigroupGcpDisk[] | cdktf.IResolvable;
  /**
  * gpu block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#gpu ElastigroupGcp#gpu}
  */
  readonly gpu?: ElastigroupGcpGpu[] | cdktf.IResolvable;
  /**
  * instance_types_custom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#instance_types_custom ElastigroupGcp#instance_types_custom}
  */
  readonly instanceTypesCustom?: ElastigroupGcpInstanceTypesCustom[] | cdktf.IResolvable;
  /**
  * integration_docker_swarm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#integration_docker_swarm ElastigroupGcp#integration_docker_swarm}
  */
  readonly integrationDockerSwarm?: ElastigroupGcpIntegrationDockerSwarm;
  /**
  * integration_gke block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#integration_gke ElastigroupGcp#integration_gke}
  */
  readonly integrationGke?: ElastigroupGcpIntegrationGke;
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#labels ElastigroupGcp#labels}
  */
  readonly labels?: ElastigroupGcpLabels[] | cdktf.IResolvable;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#metadata ElastigroupGcp#metadata}
  */
  readonly metadata?: ElastigroupGcpMetadata[] | cdktf.IResolvable;
  /**
  * network_interface block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#network_interface ElastigroupGcp#network_interface}
  */
  readonly networkInterface?: ElastigroupGcpNetworkInterface[] | cdktf.IResolvable;
  /**
  * scaling_down_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#scaling_down_policy ElastigroupGcp#scaling_down_policy}
  */
  readonly scalingDownPolicy?: ElastigroupGcpScalingDownPolicy[] | cdktf.IResolvable;
  /**
  * scaling_up_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#scaling_up_policy ElastigroupGcp#scaling_up_policy}
  */
  readonly scalingUpPolicy?: ElastigroupGcpScalingUpPolicy[] | cdktf.IResolvable;
  /**
  * scheduled_task block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#scheduled_task ElastigroupGcp#scheduled_task}
  */
  readonly scheduledTask?: ElastigroupGcpScheduledTask[] | cdktf.IResolvable;
  /**
  * subnets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#subnets ElastigroupGcp#subnets}
  */
  readonly subnets?: ElastigroupGcpSubnets[] | cdktf.IResolvable;
}
export interface ElastigroupGcpBackendServicesNamedPorts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#name ElastigroupGcp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#ports ElastigroupGcp#ports}
  */
  readonly ports: string[];
}

export function elastigroupGcpBackendServicesNamedPortsToTerraform(struct?: ElastigroupGcpBackendServicesNamedPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ports),
  }
}

export interface ElastigroupGcpBackendServices {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#location_type ElastigroupGcp#location_type}
  */
  readonly locationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#scheme ElastigroupGcp#scheme}
  */
  readonly scheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#service_name ElastigroupGcp#service_name}
  */
  readonly serviceName: string;
  /**
  * named_ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#named_ports ElastigroupGcp#named_ports}
  */
  readonly namedPorts?: ElastigroupGcpBackendServicesNamedPorts[] | cdktf.IResolvable;
}

export function elastigroupGcpBackendServicesToTerraform(struct?: ElastigroupGcpBackendServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_type: cdktf.stringToTerraform(struct!.locationType),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    named_ports: cdktf.listMapper(elastigroupGcpBackendServicesNamedPortsToTerraform)(struct!.namedPorts),
  }
}

export interface ElastigroupGcpDiskInitializeParams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#disk_size_gb ElastigroupGcp#disk_size_gb}
  */
  readonly diskSizeGb?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#disk_type ElastigroupGcp#disk_type}
  */
  readonly diskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#source_image ElastigroupGcp#source_image}
  */
  readonly sourceImage: string;
}

export function elastigroupGcpDiskInitializeParamsToTerraform(struct?: ElastigroupGcpDiskInitializeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_gb: cdktf.stringToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    source_image: cdktf.stringToTerraform(struct!.sourceImage),
  }
}

export interface ElastigroupGcpDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#auto_delete ElastigroupGcp#auto_delete}
  */
  readonly autoDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#boot ElastigroupGcp#boot}
  */
  readonly boot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#device_name ElastigroupGcp#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#interface ElastigroupGcp#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#mode ElastigroupGcp#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#source ElastigroupGcp#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#type ElastigroupGcp#type}
  */
  readonly type?: string;
  /**
  * initialize_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#initialize_params ElastigroupGcp#initialize_params}
  */
  readonly initializeParams?: ElastigroupGcpDiskInitializeParams[] | cdktf.IResolvable;
}

export function elastigroupGcpDiskToTerraform(struct?: ElastigroupGcpDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_delete: cdktf.booleanToTerraform(struct!.autoDelete),
    boot: cdktf.booleanToTerraform(struct!.boot),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    interface: cdktf.stringToTerraform(struct!.interface),
    mode: cdktf.stringToTerraform(struct!.mode),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    initialize_params: cdktf.listMapper(elastigroupGcpDiskInitializeParamsToTerraform)(struct!.initializeParams),
  }
}

export interface ElastigroupGcpGpu {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#count ElastigroupGcp#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#type ElastigroupGcp#type}
  */
  readonly type: string;
}

export function elastigroupGcpGpuToTerraform(struct?: ElastigroupGcpGpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ElastigroupGcpInstanceTypesCustom {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#memory_gib ElastigroupGcp#memory_gib}
  */
  readonly memoryGib: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#vcpu ElastigroupGcp#vcpu}
  */
  readonly vcpu: number;
}

export function elastigroupGcpInstanceTypesCustomToTerraform(struct?: ElastigroupGcpInstanceTypesCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_gib: cdktf.numberToTerraform(struct!.memoryGib),
    vcpu: cdktf.numberToTerraform(struct!.vcpu),
  }
}

export interface ElastigroupGcpIntegrationDockerSwarm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#master_host ElastigroupGcp#master_host}
  */
  readonly masterHost: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#master_port ElastigroupGcp#master_port}
  */
  readonly masterPort: number;
}

export function elastigroupGcpIntegrationDockerSwarmToTerraform(struct?: ElastigroupGcpIntegrationDockerSwarmOutputReference | ElastigroupGcpIntegrationDockerSwarm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master_host: cdktf.stringToTerraform(struct!.masterHost),
    master_port: cdktf.numberToTerraform(struct!.masterPort),
  }
}

export class ElastigroupGcpIntegrationDockerSwarmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupGcpIntegrationDockerSwarm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masterHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterHost = this._masterHost;
    }
    if (this._masterPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPort = this._masterPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGcpIntegrationDockerSwarm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._masterHost = undefined;
      this._masterPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._masterHost = value.masterHost;
      this._masterPort = value.masterPort;
    }
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
}
export interface ElastigroupGcpIntegrationGkeAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
}

export function elastigroupGcpIntegrationGkeAutoscaleDownToTerraform(struct?: ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference | ElastigroupGcpIntegrationGkeAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
  }
}

export class ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupGcpIntegrationGkeAutoscaleDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGcpIntegrationGkeAutoscaleDown | undefined) {
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
export interface ElastigroupGcpIntegrationGkeAutoscaleHeadroom {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#cpu_per_unit ElastigroupGcp#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#memory_per_unit ElastigroupGcp#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#num_of_units ElastigroupGcp#num_of_units}
  */
  readonly numOfUnits?: number;
}

export function elastigroupGcpIntegrationGkeAutoscaleHeadroomToTerraform(struct?: ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference | ElastigroupGcpIntegrationGkeAutoscaleHeadroom): any {
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

export class ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupGcpIntegrationGkeAutoscaleHeadroom | undefined {
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

  public set internalValue(value: ElastigroupGcpIntegrationGkeAutoscaleHeadroom | undefined) {
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
export interface ElastigroupGcpIntegrationGkeAutoscaleLabels {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#key ElastigroupGcp#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#value ElastigroupGcp#value}
  */
  readonly value: string;
}

export function elastigroupGcpIntegrationGkeAutoscaleLabelsToTerraform(struct?: ElastigroupGcpIntegrationGkeAutoscaleLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupGcpIntegrationGke {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#auto_update ElastigroupGcp#auto_update}
  */
  readonly autoUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#autoscale_cooldown ElastigroupGcp#autoscale_cooldown}
  */
  readonly autoscaleCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#autoscale_is_auto_config ElastigroupGcp#autoscale_is_auto_config}
  */
  readonly autoscaleIsAutoConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#autoscale_is_enabled ElastigroupGcp#autoscale_is_enabled}
  */
  readonly autoscaleIsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#cluster_id ElastigroupGcp#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#location ElastigroupGcp#location}
  */
  readonly location?: string;
  /**
  * autoscale_down block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#autoscale_down ElastigroupGcp#autoscale_down}
  */
  readonly autoscaleDown?: ElastigroupGcpIntegrationGkeAutoscaleDown;
  /**
  * autoscale_headroom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#autoscale_headroom ElastigroupGcp#autoscale_headroom}
  */
  readonly autoscaleHeadroom?: ElastigroupGcpIntegrationGkeAutoscaleHeadroom;
  /**
  * autoscale_labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#autoscale_labels ElastigroupGcp#autoscale_labels}
  */
  readonly autoscaleLabels?: ElastigroupGcpIntegrationGkeAutoscaleLabels[] | cdktf.IResolvable;
}

export function elastigroupGcpIntegrationGkeToTerraform(struct?: ElastigroupGcpIntegrationGkeOutputReference | ElastigroupGcpIntegrationGke): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_update: cdktf.booleanToTerraform(struct!.autoUpdate),
    autoscale_cooldown: cdktf.numberToTerraform(struct!.autoscaleCooldown),
    autoscale_is_auto_config: cdktf.booleanToTerraform(struct!.autoscaleIsAutoConfig),
    autoscale_is_enabled: cdktf.booleanToTerraform(struct!.autoscaleIsEnabled),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    location: cdktf.stringToTerraform(struct!.location),
    autoscale_down: elastigroupGcpIntegrationGkeAutoscaleDownToTerraform(struct!.autoscaleDown),
    autoscale_headroom: elastigroupGcpIntegrationGkeAutoscaleHeadroomToTerraform(struct!.autoscaleHeadroom),
    autoscale_labels: cdktf.listMapper(elastigroupGcpIntegrationGkeAutoscaleLabelsToTerraform)(struct!.autoscaleLabels),
  }
}

export class ElastigroupGcpIntegrationGkeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupGcpIntegrationGke | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpdate = this._autoUpdate;
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
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
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

  public set internalValue(value: ElastigroupGcpIntegrationGke | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoUpdate = undefined;
      this._autoscaleCooldown = undefined;
      this._autoscaleIsAutoConfig = undefined;
      this._autoscaleIsEnabled = undefined;
      this._clusterId = undefined;
      this._location = undefined;
      this._autoscaleDown.internalValue = undefined;
      this._autoscaleHeadroom.internalValue = undefined;
      this._autoscaleLabels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoUpdate = value.autoUpdate;
      this._autoscaleCooldown = value.autoscaleCooldown;
      this._autoscaleIsAutoConfig = value.autoscaleIsAutoConfig;
      this._autoscaleIsEnabled = value.autoscaleIsEnabled;
      this._clusterId = value.clusterId;
      this._location = value.location;
      this._autoscaleDown.internalValue = value.autoscaleDown;
      this._autoscaleHeadroom.internalValue = value.autoscaleHeadroom;
      this._autoscaleLabels = value.autoscaleLabels;
    }
  }

  // auto_update - computed: false, optional: true, required: false
  private _autoUpdate?: boolean | cdktf.IResolvable; 
  public get autoUpdate() {
    return this.getBooleanAttribute('auto_update');
  }
  public set autoUpdate(value: boolean | cdktf.IResolvable) {
    this._autoUpdate = value;
  }
  public resetAutoUpdate() {
    this._autoUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateInput() {
    return this._autoUpdate;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // autoscale_down - computed: false, optional: true, required: false
  private _autoscaleDown = new ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference(this, "autoscale_down");
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: ElastigroupGcpIntegrationGkeAutoscaleDown) {
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
  private _autoscaleHeadroom = new ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference(this, "autoscale_headroom");
  public get autoscaleHeadroom() {
    return this._autoscaleHeadroom;
  }
  public putAutoscaleHeadroom(value: ElastigroupGcpIntegrationGkeAutoscaleHeadroom) {
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
  private _autoscaleLabels?: ElastigroupGcpIntegrationGkeAutoscaleLabels[] | cdktf.IResolvable; 
  public get autoscaleLabels() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('autoscale_labels')));
  }
  public set autoscaleLabels(value: ElastigroupGcpIntegrationGkeAutoscaleLabels[] | cdktf.IResolvable) {
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
export interface ElastigroupGcpLabels {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#key ElastigroupGcp#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#value ElastigroupGcp#value}
  */
  readonly value: string;
}

export function elastigroupGcpLabelsToTerraform(struct?: ElastigroupGcpLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupGcpMetadata {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#key ElastigroupGcp#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#value ElastigroupGcp#value}
  */
  readonly value: string;
}

export function elastigroupGcpMetadataToTerraform(struct?: ElastigroupGcpMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupGcpNetworkInterfaceAccessConfigs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#name ElastigroupGcp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#type ElastigroupGcp#type}
  */
  readonly type?: string;
}

export function elastigroupGcpNetworkInterfaceAccessConfigsToTerraform(struct?: ElastigroupGcpNetworkInterfaceAccessConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ElastigroupGcpNetworkInterfaceAliasIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#ip_cidr_range ElastigroupGcp#ip_cidr_range}
  */
  readonly ipCidrRange: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#subnetwork_range_name ElastigroupGcp#subnetwork_range_name}
  */
  readonly subnetworkRangeName: string;
}

export function elastigroupGcpNetworkInterfaceAliasIpRangesToTerraform(struct?: ElastigroupGcpNetworkInterfaceAliasIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_cidr_range: cdktf.stringToTerraform(struct!.ipCidrRange),
    subnetwork_range_name: cdktf.stringToTerraform(struct!.subnetworkRangeName),
  }
}

export interface ElastigroupGcpNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#network ElastigroupGcp#network}
  */
  readonly network: string;
  /**
  * access_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#access_configs ElastigroupGcp#access_configs}
  */
  readonly accessConfigs?: ElastigroupGcpNetworkInterfaceAccessConfigs[] | cdktf.IResolvable;
  /**
  * alias_ip_ranges block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#alias_ip_ranges ElastigroupGcp#alias_ip_ranges}
  */
  readonly aliasIpRanges?: ElastigroupGcpNetworkInterfaceAliasIpRanges[] | cdktf.IResolvable;
}

export function elastigroupGcpNetworkInterfaceToTerraform(struct?: ElastigroupGcpNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    access_configs: cdktf.listMapper(elastigroupGcpNetworkInterfaceAccessConfigsToTerraform)(struct!.accessConfigs),
    alias_ip_ranges: cdktf.listMapper(elastigroupGcpNetworkInterfaceAliasIpRangesToTerraform)(struct!.aliasIpRanges),
  }
}

export interface ElastigroupGcpScalingDownPolicyDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#name ElastigroupGcp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#value ElastigroupGcp#value}
  */
  readonly value?: string;
}

export function elastigroupGcpScalingDownPolicyDimensionsToTerraform(struct?: ElastigroupGcpScalingDownPolicyDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupGcpScalingDownPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#action_type ElastigroupGcp#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#adjustment ElastigroupGcp#adjustment}
  */
  readonly adjustment?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#cooldown ElastigroupGcp#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#metric_name ElastigroupGcp#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#namespace ElastigroupGcp#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#operator ElastigroupGcp#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#period ElastigroupGcp#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#policy_name ElastigroupGcp#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#source ElastigroupGcp#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#statistic ElastigroupGcp#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#threshold ElastigroupGcp#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#unit ElastigroupGcp#unit}
  */
  readonly unit: string;
  /**
  * dimensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#dimensions ElastigroupGcp#dimensions}
  */
  readonly dimensions?: ElastigroupGcpScalingDownPolicyDimensions[] | cdktf.IResolvable;
}

export function elastigroupGcpScalingDownPolicyToTerraform(struct?: ElastigroupGcpScalingDownPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.numberToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    source: cdktf.stringToTerraform(struct!.source),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    dimensions: cdktf.listMapper(elastigroupGcpScalingDownPolicyDimensionsToTerraform)(struct!.dimensions),
  }
}

export interface ElastigroupGcpScalingUpPolicyDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#name ElastigroupGcp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#value ElastigroupGcp#value}
  */
  readonly value?: string;
}

export function elastigroupGcpScalingUpPolicyDimensionsToTerraform(struct?: ElastigroupGcpScalingUpPolicyDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupGcpScalingUpPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#action_type ElastigroupGcp#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#adjustment ElastigroupGcp#adjustment}
  */
  readonly adjustment?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#cooldown ElastigroupGcp#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#metric_name ElastigroupGcp#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#namespace ElastigroupGcp#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#operator ElastigroupGcp#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#period ElastigroupGcp#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#policy_name ElastigroupGcp#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#source ElastigroupGcp#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#statistic ElastigroupGcp#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#threshold ElastigroupGcp#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#unit ElastigroupGcp#unit}
  */
  readonly unit: string;
  /**
  * dimensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#dimensions ElastigroupGcp#dimensions}
  */
  readonly dimensions?: ElastigroupGcpScalingUpPolicyDimensions[] | cdktf.IResolvable;
}

export function elastigroupGcpScalingUpPolicyToTerraform(struct?: ElastigroupGcpScalingUpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.numberToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    source: cdktf.stringToTerraform(struct!.source),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    dimensions: cdktf.listMapper(elastigroupGcpScalingUpPolicyDimensionsToTerraform)(struct!.dimensions),
  }
}

export interface ElastigroupGcpScheduledTask {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#cron_expression ElastigroupGcp#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#is_enabled ElastigroupGcp#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#max_capacity ElastigroupGcp#max_capacity}
  */
  readonly maxCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#min_capacity ElastigroupGcp#min_capacity}
  */
  readonly minCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#target_capacity ElastigroupGcp#target_capacity}
  */
  readonly targetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#task_type ElastigroupGcp#task_type}
  */
  readonly taskType: string;
}

export function elastigroupGcpScheduledTaskToTerraform(struct?: ElastigroupGcpScheduledTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    max_capacity: cdktf.stringToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.stringToTerraform(struct!.minCapacity),
    target_capacity: cdktf.stringToTerraform(struct!.targetCapacity),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}

export interface ElastigroupGcpSubnets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#region ElastigroupGcp#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp#subnet_names ElastigroupGcp#subnet_names}
  */
  readonly subnetNames: string[];
}

export function elastigroupGcpSubnetsToTerraform(struct?: ElastigroupGcpSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    subnet_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetNames),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp spotinst_elastigroup_gcp}
*/
export class ElastigroupGcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_elastigroup_gcp";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gcp spotinst_elastigroup_gcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElastigroupGcpConfig
  */
  public constructor(scope: Construct, id: string, config: ElastigroupGcpConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_elastigroup_gcp',
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
    this._availabilityZones = config.availabilityZones;
    this._description = config.description;
    this._desiredCapacity = config.desiredCapacity;
    this._drainingTimeout = config.drainingTimeout;
    this._fallbackToOndemand = config.fallbackToOndemand;
    this._healthCheckGracePeriod = config.healthCheckGracePeriod;
    this._healthCheckType = config.healthCheckType;
    this._instanceTypesOndemand = config.instanceTypesOndemand;
    this._instanceTypesPreemptible = config.instanceTypesPreemptible;
    this._ipForwarding = config.ipForwarding;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._name = config.name;
    this._ondemandCount = config.ondemandCount;
    this._preemptiblePercentage = config.preemptiblePercentage;
    this._provisioningModel = config.provisioningModel;
    this._serviceAccount = config.serviceAccount;
    this._shutdownScript = config.shutdownScript;
    this._startupScript = config.startupScript;
    this._tags = config.tags;
    this._unhealthyDuration = config.unhealthyDuration;
    this._backendServices = config.backendServices;
    this._disk = config.disk;
    this._gpu = config.gpu;
    this._instanceTypesCustom = config.instanceTypesCustom;
    this._integrationDockerSwarm.internalValue = config.integrationDockerSwarm;
    this._integrationGke.internalValue = config.integrationGke;
    this._labels = config.labels;
    this._metadata = config.metadata;
    this._networkInterface = config.networkInterface;
    this._scalingDownPolicy = config.scalingDownPolicy;
    this._scalingUpPolicy = config.scalingUpPolicy;
    this._scheduledTask = config.scheduledTask;
    this._subnets = config.subnets;
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

  // desired_capacity - computed: false, optional: false, required: true
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
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

  // fallback_to_ondemand - computed: false, optional: true, required: false
  private _fallbackToOndemand?: boolean | cdktf.IResolvable; 
  public get fallbackToOndemand() {
    return this.getBooleanAttribute('fallback_to_ondemand');
  }
  public set fallbackToOndemand(value: boolean | cdktf.IResolvable) {
    this._fallbackToOndemand = value;
  }
  public resetFallbackToOndemand() {
    this._fallbackToOndemand = undefined;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_types_ondemand - computed: false, optional: true, required: false
  private _instanceTypesOndemand?: string; 
  public get instanceTypesOndemand() {
    return this.getStringAttribute('instance_types_ondemand');
  }
  public set instanceTypesOndemand(value: string) {
    this._instanceTypesOndemand = value;
  }
  public resetInstanceTypesOndemand() {
    this._instanceTypesOndemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesOndemandInput() {
    return this._instanceTypesOndemand;
  }

  // instance_types_preemptible - computed: false, optional: true, required: false
  private _instanceTypesPreemptible?: string[]; 
  public get instanceTypesPreemptible() {
    return this.getListAttribute('instance_types_preemptible');
  }
  public set instanceTypesPreemptible(value: string[]) {
    this._instanceTypesPreemptible = value;
  }
  public resetInstanceTypesPreemptible() {
    this._instanceTypesPreemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesPreemptibleInput() {
    return this._instanceTypesPreemptible;
  }

  // ip_forwarding - computed: false, optional: true, required: false
  private _ipForwarding?: boolean | cdktf.IResolvable; 
  public get ipForwarding() {
    return this.getBooleanAttribute('ip_forwarding');
  }
  public set ipForwarding(value: boolean | cdktf.IResolvable) {
    this._ipForwarding = value;
  }
  public resetIpForwarding() {
    this._ipForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipForwardingInput() {
    return this._ipForwarding;
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

  // preemptible_percentage - computed: false, optional: true, required: false
  private _preemptiblePercentage?: number; 
  public get preemptiblePercentage() {
    return this.getNumberAttribute('preemptible_percentage');
  }
  public set preemptiblePercentage(value: number) {
    this._preemptiblePercentage = value;
  }
  public resetPreemptiblePercentage() {
    this._preemptiblePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptiblePercentageInput() {
    return this._preemptiblePercentage;
  }

  // provisioning_model - computed: false, optional: true, required: false
  private _provisioningModel?: string; 
  public get provisioningModel() {
    return this.getStringAttribute('provisioning_model');
  }
  public set provisioningModel(value: string) {
    this._provisioningModel = value;
  }
  public resetProvisioningModel() {
    this._provisioningModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningModelInput() {
    return this._provisioningModel;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
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

  // startup_script - computed: false, optional: true, required: false
  private _startupScript?: string; 
  public get startupScript() {
    return this.getStringAttribute('startup_script');
  }
  public set startupScript(value: string) {
    this._startupScript = value;
  }
  public resetStartupScript() {
    this._startupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupScriptInput() {
    return this._startupScript;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // backend_services - computed: false, optional: true, required: false
  private _backendServices?: ElastigroupGcpBackendServices[] | cdktf.IResolvable; 
  public get backendServices() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('backend_services')));
  }
  public set backendServices(value: ElastigroupGcpBackendServices[] | cdktf.IResolvable) {
    this._backendServices = value;
  }
  public resetBackendServices() {
    this._backendServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServicesInput() {
    return this._backendServices;
  }

  // disk - computed: false, optional: true, required: false
  private _disk?: ElastigroupGcpDisk[] | cdktf.IResolvable; 
  public get disk() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('disk')));
  }
  public set disk(value: ElastigroupGcpDisk[] | cdktf.IResolvable) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // gpu - computed: false, optional: true, required: false
  private _gpu?: ElastigroupGcpGpu[] | cdktf.IResolvable; 
  public get gpu() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('gpu')));
  }
  public set gpu(value: ElastigroupGcpGpu[] | cdktf.IResolvable) {
    this._gpu = value;
  }
  public resetGpu() {
    this._gpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuInput() {
    return this._gpu;
  }

  // instance_types_custom - computed: false, optional: true, required: false
  private _instanceTypesCustom?: ElastigroupGcpInstanceTypesCustom[] | cdktf.IResolvable; 
  public get instanceTypesCustom() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('instance_types_custom');
  }
  public set instanceTypesCustom(value: ElastigroupGcpInstanceTypesCustom[] | cdktf.IResolvable) {
    this._instanceTypesCustom = value;
  }
  public resetInstanceTypesCustom() {
    this._instanceTypesCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesCustomInput() {
    return this._instanceTypesCustom;
  }

  // integration_docker_swarm - computed: false, optional: true, required: false
  private _integrationDockerSwarm = new ElastigroupGcpIntegrationDockerSwarmOutputReference(this, "integration_docker_swarm");
  public get integrationDockerSwarm() {
    return this._integrationDockerSwarm;
  }
  public putIntegrationDockerSwarm(value: ElastigroupGcpIntegrationDockerSwarm) {
    this._integrationDockerSwarm.internalValue = value;
  }
  public resetIntegrationDockerSwarm() {
    this._integrationDockerSwarm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationDockerSwarmInput() {
    return this._integrationDockerSwarm.internalValue;
  }

  // integration_gke - computed: false, optional: true, required: false
  private _integrationGke = new ElastigroupGcpIntegrationGkeOutputReference(this, "integration_gke");
  public get integrationGke() {
    return this._integrationGke;
  }
  public putIntegrationGke(value: ElastigroupGcpIntegrationGke) {
    this._integrationGke.internalValue = value;
  }
  public resetIntegrationGke() {
    this._integrationGke.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationGkeInput() {
    return this._integrationGke.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: ElastigroupGcpLabels[] | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('labels')));
  }
  public set labels(value: ElastigroupGcpLabels[] | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: ElastigroupGcpMetadata[] | cdktf.IResolvable; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('metadata')));
  }
  public set metadata(value: ElastigroupGcpMetadata[] | cdktf.IResolvable) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface?: ElastigroupGcpNetworkInterface[] | cdktf.IResolvable; 
  public get networkInterface() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_interface');
  }
  public set networkInterface(value: ElastigroupGcpNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface = value;
  }
  public resetNetworkInterface() {
    this._networkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface;
  }

  // scaling_down_policy - computed: false, optional: true, required: false
  private _scalingDownPolicy?: ElastigroupGcpScalingDownPolicy[] | cdktf.IResolvable; 
  public get scalingDownPolicy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scaling_down_policy')));
  }
  public set scalingDownPolicy(value: ElastigroupGcpScalingDownPolicy[] | cdktf.IResolvable) {
    this._scalingDownPolicy = value;
  }
  public resetScalingDownPolicy() {
    this._scalingDownPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingDownPolicyInput() {
    return this._scalingDownPolicy;
  }

  // scaling_up_policy - computed: false, optional: true, required: false
  private _scalingUpPolicy?: ElastigroupGcpScalingUpPolicy[] | cdktf.IResolvable; 
  public get scalingUpPolicy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scaling_up_policy')));
  }
  public set scalingUpPolicy(value: ElastigroupGcpScalingUpPolicy[] | cdktf.IResolvable) {
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
  private _scheduledTask?: ElastigroupGcpScheduledTask[] | cdktf.IResolvable; 
  public get scheduledTask() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scheduled_task')));
  }
  public set scheduledTask(value: ElastigroupGcpScheduledTask[] | cdktf.IResolvable) {
    this._scheduledTask = value;
  }
  public resetScheduledTask() {
    this._scheduledTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTaskInput() {
    return this._scheduledTask;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: ElastigroupGcpSubnets[] | cdktf.IResolvable; 
  public get subnets() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('subnets')));
  }
  public set subnets(value: ElastigroupGcpSubnets[] | cdktf.IResolvable) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_healing: cdktf.booleanToTerraform(this._autoHealing),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
      description: cdktf.stringToTerraform(this._description),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      draining_timeout: cdktf.numberToTerraform(this._drainingTimeout),
      fallback_to_ondemand: cdktf.booleanToTerraform(this._fallbackToOndemand),
      health_check_grace_period: cdktf.numberToTerraform(this._healthCheckGracePeriod),
      health_check_type: cdktf.stringToTerraform(this._healthCheckType),
      instance_types_ondemand: cdktf.stringToTerraform(this._instanceTypesOndemand),
      instance_types_preemptible: cdktf.listMapper(cdktf.stringToTerraform)(this._instanceTypesPreemptible),
      ip_forwarding: cdktf.booleanToTerraform(this._ipForwarding),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      name: cdktf.stringToTerraform(this._name),
      ondemand_count: cdktf.numberToTerraform(this._ondemandCount),
      preemptible_percentage: cdktf.numberToTerraform(this._preemptiblePercentage),
      provisioning_model: cdktf.stringToTerraform(this._provisioningModel),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      shutdown_script: cdktf.stringToTerraform(this._shutdownScript),
      startup_script: cdktf.stringToTerraform(this._startupScript),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      unhealthy_duration: cdktf.numberToTerraform(this._unhealthyDuration),
      backend_services: cdktf.listMapper(elastigroupGcpBackendServicesToTerraform)(this._backendServices),
      disk: cdktf.listMapper(elastigroupGcpDiskToTerraform)(this._disk),
      gpu: cdktf.listMapper(elastigroupGcpGpuToTerraform)(this._gpu),
      instance_types_custom: cdktf.listMapper(elastigroupGcpInstanceTypesCustomToTerraform)(this._instanceTypesCustom),
      integration_docker_swarm: elastigroupGcpIntegrationDockerSwarmToTerraform(this._integrationDockerSwarm.internalValue),
      integration_gke: elastigroupGcpIntegrationGkeToTerraform(this._integrationGke.internalValue),
      labels: cdktf.listMapper(elastigroupGcpLabelsToTerraform)(this._labels),
      metadata: cdktf.listMapper(elastigroupGcpMetadataToTerraform)(this._metadata),
      network_interface: cdktf.listMapper(elastigroupGcpNetworkInterfaceToTerraform)(this._networkInterface),
      scaling_down_policy: cdktf.listMapper(elastigroupGcpScalingDownPolicyToTerraform)(this._scalingDownPolicy),
      scaling_up_policy: cdktf.listMapper(elastigroupGcpScalingUpPolicyToTerraform)(this._scalingUpPolicy),
      scheduled_task: cdktf.listMapper(elastigroupGcpScheduledTaskToTerraform)(this._scheduledTask),
      subnets: cdktf.listMapper(elastigroupGcpSubnetsToTerraform)(this._subnets),
    };
  }
}
