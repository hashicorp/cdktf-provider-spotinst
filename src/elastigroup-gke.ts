// https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElastigroupGkeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#cluster_id ElastigroupGke#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#cluster_zone_name ElastigroupGke#cluster_zone_name}
  */
  readonly clusterZoneName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#desired_capacity ElastigroupGke#desired_capacity}
  */
  readonly desiredCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#draining_timeout ElastigroupGke#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#fallback_to_ondemand ElastigroupGke#fallback_to_ondemand}
  */
  readonly fallbackToOndemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#instance_types_ondemand ElastigroupGke#instance_types_ondemand}
  */
  readonly instanceTypesOndemand?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#instance_types_preemptible ElastigroupGke#instance_types_preemptible}
  */
  readonly instanceTypesPreemptible?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#ip_forwarding ElastigroupGke#ip_forwarding}
  */
  readonly ipForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#max_size ElastigroupGke#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#min_size ElastigroupGke#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#name ElastigroupGke#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#node_image ElastigroupGke#node_image}
  */
  readonly nodeImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#ondemand_count ElastigroupGke#ondemand_count}
  */
  readonly ondemandCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#preemptible_percentage ElastigroupGke#preemptible_percentage}
  */
  readonly preemptiblePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#provisioning_model ElastigroupGke#provisioning_model}
  */
  readonly provisioningModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#service_account ElastigroupGke#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#shutdown_script ElastigroupGke#shutdown_script}
  */
  readonly shutdownScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#startup_script ElastigroupGke#startup_script}
  */
  readonly startupScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#tags ElastigroupGke#tags}
  */
  readonly tags?: string[];
  /**
  * backend_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#backend_services ElastigroupGke#backend_services}
  */
  readonly backendServices?: ElastigroupGkeBackendServices[] | cdktf.IResolvable;
  /**
  * disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#disk ElastigroupGke#disk}
  */
  readonly disk?: ElastigroupGkeDisk[] | cdktf.IResolvable;
  /**
  * gpu block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#gpu ElastigroupGke#gpu}
  */
  readonly gpu?: ElastigroupGkeGpu[] | cdktf.IResolvable;
  /**
  * instance_types_custom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#instance_types_custom ElastigroupGke#instance_types_custom}
  */
  readonly instanceTypesCustom?: ElastigroupGkeInstanceTypesCustom[] | cdktf.IResolvable;
  /**
  * integration_docker_swarm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#integration_docker_swarm ElastigroupGke#integration_docker_swarm}
  */
  readonly integrationDockerSwarm?: ElastigroupGkeIntegrationDockerSwarm;
  /**
  * integration_gke block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#integration_gke ElastigroupGke#integration_gke}
  */
  readonly integrationGke?: ElastigroupGkeIntegrationGke;
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#labels ElastigroupGke#labels}
  */
  readonly labels?: ElastigroupGkeLabels[] | cdktf.IResolvable;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#metadata ElastigroupGke#metadata}
  */
  readonly metadata?: ElastigroupGkeMetadata[] | cdktf.IResolvable;
  /**
  * network_interface block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#network_interface ElastigroupGke#network_interface}
  */
  readonly networkInterface?: ElastigroupGkeNetworkInterface[] | cdktf.IResolvable;
  /**
  * scaling_down_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#scaling_down_policy ElastigroupGke#scaling_down_policy}
  */
  readonly scalingDownPolicy?: ElastigroupGkeScalingDownPolicy[] | cdktf.IResolvable;
  /**
  * scaling_up_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#scaling_up_policy ElastigroupGke#scaling_up_policy}
  */
  readonly scalingUpPolicy?: ElastigroupGkeScalingUpPolicy[] | cdktf.IResolvable;
}
export interface ElastigroupGkeBackendServicesNamedPorts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#name ElastigroupGke#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#ports ElastigroupGke#ports}
  */
  readonly ports: string[];
}

export function elastigroupGkeBackendServicesNamedPortsToTerraform(struct?: ElastigroupGkeBackendServicesNamedPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ports),
  }
}

export interface ElastigroupGkeBackendServices {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#location_type ElastigroupGke#location_type}
  */
  readonly locationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#scheme ElastigroupGke#scheme}
  */
  readonly scheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#service_name ElastigroupGke#service_name}
  */
  readonly serviceName: string;
  /**
  * named_ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#named_ports ElastigroupGke#named_ports}
  */
  readonly namedPorts?: ElastigroupGkeBackendServicesNamedPorts[] | cdktf.IResolvable;
}

export function elastigroupGkeBackendServicesToTerraform(struct?: ElastigroupGkeBackendServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_type: cdktf.stringToTerraform(struct!.locationType),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    named_ports: cdktf.listMapper(elastigroupGkeBackendServicesNamedPortsToTerraform)(struct!.namedPorts),
  }
}

export interface ElastigroupGkeDiskInitializeParams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#disk_size_gb ElastigroupGke#disk_size_gb}
  */
  readonly diskSizeGb?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#disk_type ElastigroupGke#disk_type}
  */
  readonly diskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#source_image ElastigroupGke#source_image}
  */
  readonly sourceImage: string;
}

export function elastigroupGkeDiskInitializeParamsToTerraform(struct?: ElastigroupGkeDiskInitializeParams | cdktf.IResolvable): any {
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

export interface ElastigroupGkeDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#auto_delete ElastigroupGke#auto_delete}
  */
  readonly autoDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#boot ElastigroupGke#boot}
  */
  readonly boot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#device_name ElastigroupGke#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#interface ElastigroupGke#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#mode ElastigroupGke#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#source ElastigroupGke#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#type ElastigroupGke#type}
  */
  readonly type?: string;
  /**
  * initialize_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#initialize_params ElastigroupGke#initialize_params}
  */
  readonly initializeParams?: ElastigroupGkeDiskInitializeParams[] | cdktf.IResolvable;
}

export function elastigroupGkeDiskToTerraform(struct?: ElastigroupGkeDisk | cdktf.IResolvable): any {
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
    initialize_params: cdktf.listMapper(elastigroupGkeDiskInitializeParamsToTerraform)(struct!.initializeParams),
  }
}

export interface ElastigroupGkeGpu {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#count ElastigroupGke#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#type ElastigroupGke#type}
  */
  readonly type: string;
}

export function elastigroupGkeGpuToTerraform(struct?: ElastigroupGkeGpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ElastigroupGkeInstanceTypesCustom {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#memory_gib ElastigroupGke#memory_gib}
  */
  readonly memoryGib: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#vcpu ElastigroupGke#vcpu}
  */
  readonly vcpu: number;
}

export function elastigroupGkeInstanceTypesCustomToTerraform(struct?: ElastigroupGkeInstanceTypesCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_gib: cdktf.numberToTerraform(struct!.memoryGib),
    vcpu: cdktf.numberToTerraform(struct!.vcpu),
  }
}

export interface ElastigroupGkeIntegrationDockerSwarm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#master_host ElastigroupGke#master_host}
  */
  readonly masterHost: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#master_port ElastigroupGke#master_port}
  */
  readonly masterPort: number;
}

export function elastigroupGkeIntegrationDockerSwarmToTerraform(struct?: ElastigroupGkeIntegrationDockerSwarmOutputReference | ElastigroupGkeIntegrationDockerSwarm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master_host: cdktf.stringToTerraform(struct!.masterHost),
    master_port: cdktf.numberToTerraform(struct!.masterPort),
  }
}

export class ElastigroupGkeIntegrationDockerSwarmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupGkeIntegrationDockerSwarm | undefined {
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

  public set internalValue(value: ElastigroupGkeIntegrationDockerSwarm | undefined) {
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
export interface ElastigroupGkeIntegrationGkeAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
}

export function elastigroupGkeIntegrationGkeAutoscaleDownToTerraform(struct?: ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference | ElastigroupGkeIntegrationGkeAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
  }
}

export class ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupGkeIntegrationGkeAutoscaleDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupGkeIntegrationGkeAutoscaleDown | undefined) {
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
export interface ElastigroupGkeIntegrationGkeAutoscaleHeadroom {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#cpu_per_unit ElastigroupGke#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#memory_per_unit ElastigroupGke#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#num_of_units ElastigroupGke#num_of_units}
  */
  readonly numOfUnits?: number;
}

export function elastigroupGkeIntegrationGkeAutoscaleHeadroomToTerraform(struct?: ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference | ElastigroupGkeIntegrationGkeAutoscaleHeadroom): any {
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

export class ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupGkeIntegrationGkeAutoscaleHeadroom | undefined {
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

  public set internalValue(value: ElastigroupGkeIntegrationGkeAutoscaleHeadroom | undefined) {
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
export interface ElastigroupGkeIntegrationGkeAutoscaleLabels {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#key ElastigroupGke#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#value ElastigroupGke#value}
  */
  readonly value: string;
}

export function elastigroupGkeIntegrationGkeAutoscaleLabelsToTerraform(struct?: ElastigroupGkeIntegrationGkeAutoscaleLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupGkeIntegrationGke {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#auto_update ElastigroupGke#auto_update}
  */
  readonly autoUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#autoscale_cooldown ElastigroupGke#autoscale_cooldown}
  */
  readonly autoscaleCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#autoscale_is_auto_config ElastigroupGke#autoscale_is_auto_config}
  */
  readonly autoscaleIsAutoConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#autoscale_is_enabled ElastigroupGke#autoscale_is_enabled}
  */
  readonly autoscaleIsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#cluster_id ElastigroupGke#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#location ElastigroupGke#location}
  */
  readonly location?: string;
  /**
  * autoscale_down block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#autoscale_down ElastigroupGke#autoscale_down}
  */
  readonly autoscaleDown?: ElastigroupGkeIntegrationGkeAutoscaleDown;
  /**
  * autoscale_headroom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#autoscale_headroom ElastigroupGke#autoscale_headroom}
  */
  readonly autoscaleHeadroom?: ElastigroupGkeIntegrationGkeAutoscaleHeadroom;
  /**
  * autoscale_labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#autoscale_labels ElastigroupGke#autoscale_labels}
  */
  readonly autoscaleLabels?: ElastigroupGkeIntegrationGkeAutoscaleLabels[] | cdktf.IResolvable;
}

export function elastigroupGkeIntegrationGkeToTerraform(struct?: ElastigroupGkeIntegrationGkeOutputReference | ElastigroupGkeIntegrationGke): any {
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
    autoscale_down: elastigroupGkeIntegrationGkeAutoscaleDownToTerraform(struct!.autoscaleDown),
    autoscale_headroom: elastigroupGkeIntegrationGkeAutoscaleHeadroomToTerraform(struct!.autoscaleHeadroom),
    autoscale_labels: cdktf.listMapper(elastigroupGkeIntegrationGkeAutoscaleLabelsToTerraform)(struct!.autoscaleLabels),
  }
}

export class ElastigroupGkeIntegrationGkeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupGkeIntegrationGke | undefined {
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

  public set internalValue(value: ElastigroupGkeIntegrationGke | undefined) {
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
  private _autoscaleDown = new ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference(this, "autoscale_down");
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: ElastigroupGkeIntegrationGkeAutoscaleDown) {
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
  private _autoscaleHeadroom = new ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference(this, "autoscale_headroom");
  public get autoscaleHeadroom() {
    return this._autoscaleHeadroom;
  }
  public putAutoscaleHeadroom(value: ElastigroupGkeIntegrationGkeAutoscaleHeadroom) {
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
  private _autoscaleLabels?: ElastigroupGkeIntegrationGkeAutoscaleLabels[] | cdktf.IResolvable; 
  public get autoscaleLabels() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('autoscale_labels')));
  }
  public set autoscaleLabels(value: ElastigroupGkeIntegrationGkeAutoscaleLabels[] | cdktf.IResolvable) {
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
export interface ElastigroupGkeLabels {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#key ElastigroupGke#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#value ElastigroupGke#value}
  */
  readonly value: string;
}

export function elastigroupGkeLabelsToTerraform(struct?: ElastigroupGkeLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupGkeMetadata {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#key ElastigroupGke#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#value ElastigroupGke#value}
  */
  readonly value: string;
}

export function elastigroupGkeMetadataToTerraform(struct?: ElastigroupGkeMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupGkeNetworkInterfaceAccessConfigs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#name ElastigroupGke#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#type ElastigroupGke#type}
  */
  readonly type?: string;
}

export function elastigroupGkeNetworkInterfaceAccessConfigsToTerraform(struct?: ElastigroupGkeNetworkInterfaceAccessConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ElastigroupGkeNetworkInterfaceAliasIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#ip_cidr_range ElastigroupGke#ip_cidr_range}
  */
  readonly ipCidrRange: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#subnetwork_range_name ElastigroupGke#subnetwork_range_name}
  */
  readonly subnetworkRangeName: string;
}

export function elastigroupGkeNetworkInterfaceAliasIpRangesToTerraform(struct?: ElastigroupGkeNetworkInterfaceAliasIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_cidr_range: cdktf.stringToTerraform(struct!.ipCidrRange),
    subnetwork_range_name: cdktf.stringToTerraform(struct!.subnetworkRangeName),
  }
}

export interface ElastigroupGkeNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#network ElastigroupGke#network}
  */
  readonly network: string;
  /**
  * access_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#access_configs ElastigroupGke#access_configs}
  */
  readonly accessConfigs?: ElastigroupGkeNetworkInterfaceAccessConfigs[] | cdktf.IResolvable;
  /**
  * alias_ip_ranges block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#alias_ip_ranges ElastigroupGke#alias_ip_ranges}
  */
  readonly aliasIpRanges?: ElastigroupGkeNetworkInterfaceAliasIpRanges[] | cdktf.IResolvable;
}

export function elastigroupGkeNetworkInterfaceToTerraform(struct?: ElastigroupGkeNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    access_configs: cdktf.listMapper(elastigroupGkeNetworkInterfaceAccessConfigsToTerraform)(struct!.accessConfigs),
    alias_ip_ranges: cdktf.listMapper(elastigroupGkeNetworkInterfaceAliasIpRangesToTerraform)(struct!.aliasIpRanges),
  }
}

export interface ElastigroupGkeScalingDownPolicyDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#name ElastigroupGke#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#value ElastigroupGke#value}
  */
  readonly value?: string;
}

export function elastigroupGkeScalingDownPolicyDimensionsToTerraform(struct?: ElastigroupGkeScalingDownPolicyDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupGkeScalingDownPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#action_type ElastigroupGke#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#adjustment ElastigroupGke#adjustment}
  */
  readonly adjustment?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#cooldown ElastigroupGke#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#metric_name ElastigroupGke#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#namespace ElastigroupGke#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#operator ElastigroupGke#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#period ElastigroupGke#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#policy_name ElastigroupGke#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#source ElastigroupGke#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#statistic ElastigroupGke#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#threshold ElastigroupGke#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#unit ElastigroupGke#unit}
  */
  readonly unit: string;
  /**
  * dimensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#dimensions ElastigroupGke#dimensions}
  */
  readonly dimensions?: ElastigroupGkeScalingDownPolicyDimensions[] | cdktf.IResolvable;
}

export function elastigroupGkeScalingDownPolicyToTerraform(struct?: ElastigroupGkeScalingDownPolicy | cdktf.IResolvable): any {
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
    dimensions: cdktf.listMapper(elastigroupGkeScalingDownPolicyDimensionsToTerraform)(struct!.dimensions),
  }
}

export interface ElastigroupGkeScalingUpPolicyDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#name ElastigroupGke#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#value ElastigroupGke#value}
  */
  readonly value?: string;
}

export function elastigroupGkeScalingUpPolicyDimensionsToTerraform(struct?: ElastigroupGkeScalingUpPolicyDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupGkeScalingUpPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#action_type ElastigroupGke#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#adjustment ElastigroupGke#adjustment}
  */
  readonly adjustment?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#cooldown ElastigroupGke#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#metric_name ElastigroupGke#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#namespace ElastigroupGke#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#operator ElastigroupGke#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#period ElastigroupGke#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#policy_name ElastigroupGke#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#source ElastigroupGke#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#statistic ElastigroupGke#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#threshold ElastigroupGke#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#unit ElastigroupGke#unit}
  */
  readonly unit: string;
  /**
  * dimensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke#dimensions ElastigroupGke#dimensions}
  */
  readonly dimensions?: ElastigroupGkeScalingUpPolicyDimensions[] | cdktf.IResolvable;
}

export function elastigroupGkeScalingUpPolicyToTerraform(struct?: ElastigroupGkeScalingUpPolicy | cdktf.IResolvable): any {
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
    dimensions: cdktf.listMapper(elastigroupGkeScalingUpPolicyDimensionsToTerraform)(struct!.dimensions),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke spotinst_elastigroup_gke}
*/
export class ElastigroupGke extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_elastigroup_gke";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_gke spotinst_elastigroup_gke} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElastigroupGkeConfig
  */
  public constructor(scope: Construct, id: string, config: ElastigroupGkeConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_elastigroup_gke',
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
    this._clusterId = config.clusterId;
    this._clusterZoneName = config.clusterZoneName;
    this._desiredCapacity = config.desiredCapacity;
    this._drainingTimeout = config.drainingTimeout;
    this._fallbackToOndemand = config.fallbackToOndemand;
    this._instanceTypesOndemand = config.instanceTypesOndemand;
    this._instanceTypesPreemptible = config.instanceTypesPreemptible;
    this._ipForwarding = config.ipForwarding;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._name = config.name;
    this._nodeImage = config.nodeImage;
    this._ondemandCount = config.ondemandCount;
    this._preemptiblePercentage = config.preemptiblePercentage;
    this._provisioningModel = config.provisioningModel;
    this._serviceAccount = config.serviceAccount;
    this._shutdownScript = config.shutdownScript;
    this._startupScript = config.startupScript;
    this._tags = config.tags;
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cluster_zone_name - computed: false, optional: false, required: true
  private _clusterZoneName?: string; 
  public get clusterZoneName() {
    return this.getStringAttribute('cluster_zone_name');
  }
  public set clusterZoneName(value: string) {
    this._clusterZoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterZoneNameInput() {
    return this._clusterZoneName;
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

  // node_image - computed: false, optional: true, required: false
  private _nodeImage?: string; 
  public get nodeImage() {
    return this.getStringAttribute('node_image');
  }
  public set nodeImage(value: string) {
    this._nodeImage = value;
  }
  public resetNodeImage() {
    this._nodeImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeImageInput() {
    return this._nodeImage;
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

  // backend_services - computed: false, optional: true, required: false
  private _backendServices?: ElastigroupGkeBackendServices[] | cdktf.IResolvable; 
  public get backendServices() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('backend_services')));
  }
  public set backendServices(value: ElastigroupGkeBackendServices[] | cdktf.IResolvable) {
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
  private _disk?: ElastigroupGkeDisk[] | cdktf.IResolvable; 
  public get disk() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('disk')));
  }
  public set disk(value: ElastigroupGkeDisk[] | cdktf.IResolvable) {
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
  private _gpu?: ElastigroupGkeGpu[] | cdktf.IResolvable; 
  public get gpu() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('gpu')));
  }
  public set gpu(value: ElastigroupGkeGpu[] | cdktf.IResolvable) {
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
  private _instanceTypesCustom?: ElastigroupGkeInstanceTypesCustom[] | cdktf.IResolvable; 
  public get instanceTypesCustom() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('instance_types_custom');
  }
  public set instanceTypesCustom(value: ElastigroupGkeInstanceTypesCustom[] | cdktf.IResolvable) {
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
  private _integrationDockerSwarm = new ElastigroupGkeIntegrationDockerSwarmOutputReference(this, "integration_docker_swarm");
  public get integrationDockerSwarm() {
    return this._integrationDockerSwarm;
  }
  public putIntegrationDockerSwarm(value: ElastigroupGkeIntegrationDockerSwarm) {
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
  private _integrationGke = new ElastigroupGkeIntegrationGkeOutputReference(this, "integration_gke");
  public get integrationGke() {
    return this._integrationGke;
  }
  public putIntegrationGke(value: ElastigroupGkeIntegrationGke) {
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
  private _labels?: ElastigroupGkeLabels[] | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('labels')));
  }
  public set labels(value: ElastigroupGkeLabels[] | cdktf.IResolvable) {
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
  private _metadata?: ElastigroupGkeMetadata[] | cdktf.IResolvable; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('metadata')));
  }
  public set metadata(value: ElastigroupGkeMetadata[] | cdktf.IResolvable) {
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
  private _networkInterface?: ElastigroupGkeNetworkInterface[] | cdktf.IResolvable; 
  public get networkInterface() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_interface');
  }
  public set networkInterface(value: ElastigroupGkeNetworkInterface[] | cdktf.IResolvable) {
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
  private _scalingDownPolicy?: ElastigroupGkeScalingDownPolicy[] | cdktf.IResolvable; 
  public get scalingDownPolicy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scaling_down_policy')));
  }
  public set scalingDownPolicy(value: ElastigroupGkeScalingDownPolicy[] | cdktf.IResolvable) {
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
  private _scalingUpPolicy?: ElastigroupGkeScalingUpPolicy[] | cdktf.IResolvable; 
  public get scalingUpPolicy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scaling_up_policy')));
  }
  public set scalingUpPolicy(value: ElastigroupGkeScalingUpPolicy[] | cdktf.IResolvable) {
    this._scalingUpPolicy = value;
  }
  public resetScalingUpPolicy() {
    this._scalingUpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingUpPolicyInput() {
    return this._scalingUpPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_zone_name: cdktf.stringToTerraform(this._clusterZoneName),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      draining_timeout: cdktf.numberToTerraform(this._drainingTimeout),
      fallback_to_ondemand: cdktf.booleanToTerraform(this._fallbackToOndemand),
      instance_types_ondemand: cdktf.stringToTerraform(this._instanceTypesOndemand),
      instance_types_preemptible: cdktf.listMapper(cdktf.stringToTerraform)(this._instanceTypesPreemptible),
      ip_forwarding: cdktf.booleanToTerraform(this._ipForwarding),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      name: cdktf.stringToTerraform(this._name),
      node_image: cdktf.stringToTerraform(this._nodeImage),
      ondemand_count: cdktf.numberToTerraform(this._ondemandCount),
      preemptible_percentage: cdktf.numberToTerraform(this._preemptiblePercentage),
      provisioning_model: cdktf.stringToTerraform(this._provisioningModel),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      shutdown_script: cdktf.stringToTerraform(this._shutdownScript),
      startup_script: cdktf.stringToTerraform(this._startupScript),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      backend_services: cdktf.listMapper(elastigroupGkeBackendServicesToTerraform)(this._backendServices),
      disk: cdktf.listMapper(elastigroupGkeDiskToTerraform)(this._disk),
      gpu: cdktf.listMapper(elastigroupGkeGpuToTerraform)(this._gpu),
      instance_types_custom: cdktf.listMapper(elastigroupGkeInstanceTypesCustomToTerraform)(this._instanceTypesCustom),
      integration_docker_swarm: elastigroupGkeIntegrationDockerSwarmToTerraform(this._integrationDockerSwarm.internalValue),
      integration_gke: elastigroupGkeIntegrationGkeToTerraform(this._integrationGke.internalValue),
      labels: cdktf.listMapper(elastigroupGkeLabelsToTerraform)(this._labels),
      metadata: cdktf.listMapper(elastigroupGkeMetadataToTerraform)(this._metadata),
      network_interface: cdktf.listMapper(elastigroupGkeNetworkInterfaceToTerraform)(this._networkInterface),
      scaling_down_policy: cdktf.listMapper(elastigroupGkeScalingDownPolicyToTerraform)(this._scalingDownPolicy),
      scaling_up_policy: cdktf.listMapper(elastigroupGkeScalingUpPolicyToTerraform)(this._scalingUpPolicy),
    };
  }
}
