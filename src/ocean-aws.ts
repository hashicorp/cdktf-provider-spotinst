// https://www.terraform.io/docs/providers/spotinst/r/ocean_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#associate_public_ip_address OceanAws#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#blacklist OceanAws#blacklist}
  */
  readonly blacklist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#controller_id OceanAws#controller_id}
  */
  readonly controllerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#desired_capacity OceanAws#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#draining_timeout OceanAws#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#ebs_optimized OceanAws#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#fallback_to_ondemand OceanAws#fallback_to_ondemand}
  */
  readonly fallbackToOndemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#grace_period OceanAws#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#iam_instance_profile OceanAws#iam_instance_profile}
  */
  readonly iamInstanceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#image_id OceanAws#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#key_name OceanAws#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_size OceanAws#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#min_size OceanAws#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#monitoring OceanAws#monitoring}
  */
  readonly monitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#name OceanAws#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#region OceanAws#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#root_volume_size OceanAws#root_volume_size}
  */
  readonly rootVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#security_groups OceanAws#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#spot_percentage OceanAws#spot_percentage}
  */
  readonly spotPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#subnet_ids OceanAws#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#use_as_template_only OceanAws#use_as_template_only}
  */
  readonly useAsTemplateOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#user_data OceanAws#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#utilize_commitments OceanAws#utilize_commitments}
  */
  readonly utilizeCommitments?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#utilize_reserved_instances OceanAws#utilize_reserved_instances}
  */
  readonly utilizeReservedInstances?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#whitelist OceanAws#whitelist}
  */
  readonly whitelist?: string[];
  /**
  * autoscaler block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#autoscaler OceanAws#autoscaler}
  */
  readonly autoscaler?: OceanAwsAutoscaler;
  /**
  * instance_metadata_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#instance_metadata_options OceanAws#instance_metadata_options}
  */
  readonly instanceMetadataOptions?: OceanAwsInstanceMetadataOptions;
  /**
  * load_balancers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#load_balancers OceanAws#load_balancers}
  */
  readonly loadBalancers?: OceanAwsLoadBalancers[] | cdktf.IResolvable;
  /**
  * logging block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#logging OceanAws#logging}
  */
  readonly logging?: OceanAwsLogging;
  /**
  * scheduled_task block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#scheduled_task OceanAws#scheduled_task}
  */
  readonly scheduledTask?: OceanAwsScheduledTask[] | cdktf.IResolvable;
  /**
  * tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#tags OceanAws#tags}
  */
  readonly tags?: OceanAwsTags[] | cdktf.IResolvable;
  /**
  * update_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#update_policy OceanAws#update_policy}
  */
  readonly updatePolicy?: OceanAwsUpdatePolicy;
}
export interface OceanAwsAutoscalerAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#evaluation_periods OceanAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_scale_down_percentage OceanAws#max_scale_down_percentage}
  */
  readonly maxScaleDownPercentage?: number;
}

export function oceanAwsAutoscalerAutoscaleDownToTerraform(struct?: OceanAwsAutoscalerAutoscaleDownOutputReference | OceanAwsAutoscalerAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_scale_down_percentage: cdktf.numberToTerraform(struct!.maxScaleDownPercentage),
  }
}

export class OceanAwsAutoscalerAutoscaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsAutoscalerAutoscaleDown | undefined {
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

  public set internalValue(value: OceanAwsAutoscalerAutoscaleDown | undefined) {
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
export interface OceanAwsAutoscalerAutoscaleHeadroom {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#cpu_per_unit OceanAws#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#gpu_per_unit OceanAws#gpu_per_unit}
  */
  readonly gpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#memory_per_unit OceanAws#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#num_of_units OceanAws#num_of_units}
  */
  readonly numOfUnits?: number;
}

export function oceanAwsAutoscalerAutoscaleHeadroomToTerraform(struct?: OceanAwsAutoscalerAutoscaleHeadroomOutputReference | OceanAwsAutoscalerAutoscaleHeadroom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_per_unit: cdktf.numberToTerraform(struct!.cpuPerUnit),
    gpu_per_unit: cdktf.numberToTerraform(struct!.gpuPerUnit),
    memory_per_unit: cdktf.numberToTerraform(struct!.memoryPerUnit),
    num_of_units: cdktf.numberToTerraform(struct!.numOfUnits),
  }
}

export class OceanAwsAutoscalerAutoscaleHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsAutoscalerAutoscaleHeadroom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPerUnit = this._cpuPerUnit;
    }
    if (this._gpuPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuPerUnit = this._gpuPerUnit;
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

  public set internalValue(value: OceanAwsAutoscalerAutoscaleHeadroom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuPerUnit = undefined;
      this._gpuPerUnit = undefined;
      this._memoryPerUnit = undefined;
      this._numOfUnits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuPerUnit = value.cpuPerUnit;
      this._gpuPerUnit = value.gpuPerUnit;
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

  // gpu_per_unit - computed: false, optional: true, required: false
  private _gpuPerUnit?: number; 
  public get gpuPerUnit() {
    return this.getNumberAttribute('gpu_per_unit');
  }
  public set gpuPerUnit(value: number) {
    this._gpuPerUnit = value;
  }
  public resetGpuPerUnit() {
    this._gpuPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuPerUnitInput() {
    return this._gpuPerUnit;
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
export interface OceanAwsAutoscalerResourceLimits {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_memory_gib OceanAws#max_memory_gib}
  */
  readonly maxMemoryGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#max_vcpu OceanAws#max_vcpu}
  */
  readonly maxVcpu?: number;
}

export function oceanAwsAutoscalerResourceLimitsToTerraform(struct?: OceanAwsAutoscalerResourceLimitsOutputReference | OceanAwsAutoscalerResourceLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_memory_gib: cdktf.numberToTerraform(struct!.maxMemoryGib),
    max_vcpu: cdktf.numberToTerraform(struct!.maxVcpu),
  }
}

export class OceanAwsAutoscalerResourceLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsAutoscalerResourceLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxMemoryGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryGib = this._maxMemoryGib;
    }
    if (this._maxVcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVcpu = this._maxVcpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsAutoscalerResourceLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxMemoryGib = undefined;
      this._maxVcpu = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxMemoryGib = value.maxMemoryGib;
      this._maxVcpu = value.maxVcpu;
    }
  }

  // max_memory_gib - computed: false, optional: true, required: false
  private _maxMemoryGib?: number; 
  public get maxMemoryGib() {
    return this.getNumberAttribute('max_memory_gib');
  }
  public set maxMemoryGib(value: number) {
    this._maxMemoryGib = value;
  }
  public resetMaxMemoryGib() {
    this._maxMemoryGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryGibInput() {
    return this._maxMemoryGib;
  }

  // max_vcpu - computed: false, optional: true, required: false
  private _maxVcpu?: number; 
  public get maxVcpu() {
    return this.getNumberAttribute('max_vcpu');
  }
  public set maxVcpu(value: number) {
    this._maxVcpu = value;
  }
  public resetMaxVcpu() {
    this._maxVcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVcpuInput() {
    return this._maxVcpu;
  }
}
export interface OceanAwsAutoscaler {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#auto_headroom_percentage OceanAws#auto_headroom_percentage}
  */
  readonly autoHeadroomPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#autoscale_cooldown OceanAws#autoscale_cooldown}
  */
  readonly autoscaleCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#autoscale_is_auto_config OceanAws#autoscale_is_auto_config}
  */
  readonly autoscaleIsAutoConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#autoscale_is_enabled OceanAws#autoscale_is_enabled}
  */
  readonly autoscaleIsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#enable_automatic_and_manual_headroom OceanAws#enable_automatic_and_manual_headroom}
  */
  readonly enableAutomaticAndManualHeadroom?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#extended_resource_definitions OceanAws#extended_resource_definitions}
  */
  readonly extendedResourceDefinitions?: string[];
  /**
  * autoscale_down block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#autoscale_down OceanAws#autoscale_down}
  */
  readonly autoscaleDown?: OceanAwsAutoscalerAutoscaleDown;
  /**
  * autoscale_headroom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#autoscale_headroom OceanAws#autoscale_headroom}
  */
  readonly autoscaleHeadroom?: OceanAwsAutoscalerAutoscaleHeadroom;
  /**
  * resource_limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#resource_limits OceanAws#resource_limits}
  */
  readonly resourceLimits?: OceanAwsAutoscalerResourceLimits;
}

export function oceanAwsAutoscalerToTerraform(struct?: OceanAwsAutoscalerOutputReference | OceanAwsAutoscaler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_headroom_percentage: cdktf.numberToTerraform(struct!.autoHeadroomPercentage),
    autoscale_cooldown: cdktf.numberToTerraform(struct!.autoscaleCooldown),
    autoscale_is_auto_config: cdktf.booleanToTerraform(struct!.autoscaleIsAutoConfig),
    autoscale_is_enabled: cdktf.booleanToTerraform(struct!.autoscaleIsEnabled),
    enable_automatic_and_manual_headroom: cdktf.booleanToTerraform(struct!.enableAutomaticAndManualHeadroom),
    extended_resource_definitions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.extendedResourceDefinitions),
    autoscale_down: oceanAwsAutoscalerAutoscaleDownToTerraform(struct!.autoscaleDown),
    autoscale_headroom: oceanAwsAutoscalerAutoscaleHeadroomToTerraform(struct!.autoscaleHeadroom),
    resource_limits: oceanAwsAutoscalerResourceLimitsToTerraform(struct!.resourceLimits),
  }
}

export class OceanAwsAutoscalerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsAutoscaler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHeadroomPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHeadroomPercentage = this._autoHeadroomPercentage;
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
    if (this._enableAutomaticAndManualHeadroom !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutomaticAndManualHeadroom = this._enableAutomaticAndManualHeadroom;
    }
    if (this._extendedResourceDefinitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedResourceDefinitions = this._extendedResourceDefinitions;
    }
    if (this._autoscaleDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleDown = this._autoscaleDown?.internalValue;
    }
    if (this._autoscaleHeadroom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleHeadroom = this._autoscaleHeadroom?.internalValue;
    }
    if (this._resourceLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimits = this._resourceLimits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsAutoscaler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoHeadroomPercentage = undefined;
      this._autoscaleCooldown = undefined;
      this._autoscaleIsAutoConfig = undefined;
      this._autoscaleIsEnabled = undefined;
      this._enableAutomaticAndManualHeadroom = undefined;
      this._extendedResourceDefinitions = undefined;
      this._autoscaleDown.internalValue = undefined;
      this._autoscaleHeadroom.internalValue = undefined;
      this._resourceLimits.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoHeadroomPercentage = value.autoHeadroomPercentage;
      this._autoscaleCooldown = value.autoscaleCooldown;
      this._autoscaleIsAutoConfig = value.autoscaleIsAutoConfig;
      this._autoscaleIsEnabled = value.autoscaleIsEnabled;
      this._enableAutomaticAndManualHeadroom = value.enableAutomaticAndManualHeadroom;
      this._extendedResourceDefinitions = value.extendedResourceDefinitions;
      this._autoscaleDown.internalValue = value.autoscaleDown;
      this._autoscaleHeadroom.internalValue = value.autoscaleHeadroom;
      this._resourceLimits.internalValue = value.resourceLimits;
    }
  }

  // auto_headroom_percentage - computed: false, optional: true, required: false
  private _autoHeadroomPercentage?: number; 
  public get autoHeadroomPercentage() {
    return this.getNumberAttribute('auto_headroom_percentage');
  }
  public set autoHeadroomPercentage(value: number) {
    this._autoHeadroomPercentage = value;
  }
  public resetAutoHeadroomPercentage() {
    this._autoHeadroomPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHeadroomPercentageInput() {
    return this._autoHeadroomPercentage;
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

  // enable_automatic_and_manual_headroom - computed: false, optional: true, required: false
  private _enableAutomaticAndManualHeadroom?: boolean | cdktf.IResolvable; 
  public get enableAutomaticAndManualHeadroom() {
    return this.getBooleanAttribute('enable_automatic_and_manual_headroom');
  }
  public set enableAutomaticAndManualHeadroom(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticAndManualHeadroom = value;
  }
  public resetEnableAutomaticAndManualHeadroom() {
    this._enableAutomaticAndManualHeadroom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticAndManualHeadroomInput() {
    return this._enableAutomaticAndManualHeadroom;
  }

  // extended_resource_definitions - computed: false, optional: true, required: false
  private _extendedResourceDefinitions?: string[]; 
  public get extendedResourceDefinitions() {
    return this.getListAttribute('extended_resource_definitions');
  }
  public set extendedResourceDefinitions(value: string[]) {
    this._extendedResourceDefinitions = value;
  }
  public resetExtendedResourceDefinitions() {
    this._extendedResourceDefinitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedResourceDefinitionsInput() {
    return this._extendedResourceDefinitions;
  }

  // autoscale_down - computed: false, optional: true, required: false
  private _autoscaleDown = new OceanAwsAutoscalerAutoscaleDownOutputReference(this, "autoscale_down");
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: OceanAwsAutoscalerAutoscaleDown) {
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
  private _autoscaleHeadroom = new OceanAwsAutoscalerAutoscaleHeadroomOutputReference(this, "autoscale_headroom");
  public get autoscaleHeadroom() {
    return this._autoscaleHeadroom;
  }
  public putAutoscaleHeadroom(value: OceanAwsAutoscalerAutoscaleHeadroom) {
    this._autoscaleHeadroom.internalValue = value;
  }
  public resetAutoscaleHeadroom() {
    this._autoscaleHeadroom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleHeadroomInput() {
    return this._autoscaleHeadroom.internalValue;
  }

  // resource_limits - computed: false, optional: true, required: false
  private _resourceLimits = new OceanAwsAutoscalerResourceLimitsOutputReference(this, "resource_limits");
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: OceanAwsAutoscalerResourceLimits) {
    this._resourceLimits.internalValue = value;
  }
  public resetResourceLimits() {
    this._resourceLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits.internalValue;
  }
}
export interface OceanAwsInstanceMetadataOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#http_put_response_hop_limit OceanAws#http_put_response_hop_limit}
  */
  readonly httpPutResponseHopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#http_tokens OceanAws#http_tokens}
  */
  readonly httpTokens: string;
}

export function oceanAwsInstanceMetadataOptionsToTerraform(struct?: OceanAwsInstanceMetadataOptionsOutputReference | OceanAwsInstanceMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
    http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
  }
}

export class OceanAwsInstanceMetadataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsInstanceMetadataOptions | undefined {
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

  public set internalValue(value: OceanAwsInstanceMetadataOptions | undefined) {
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
export interface OceanAwsLoadBalancers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#arn OceanAws#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#name OceanAws#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#type OceanAws#type}
  */
  readonly type?: string;
}

export function oceanAwsLoadBalancersToTerraform(struct?: OceanAwsLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface OceanAwsLoggingExportS3 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#id OceanAws#id}
  */
  readonly id: string;
}

export function oceanAwsLoggingExportS3ToTerraform(struct?: OceanAwsLoggingExportS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface OceanAwsLoggingExport {
  /**
  * s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#s3 OceanAws#s3}
  */
  readonly s3?: OceanAwsLoggingExportS3[] | cdktf.IResolvable;
}

export function oceanAwsLoggingExportToTerraform(struct?: OceanAwsLoggingExportOutputReference | OceanAwsLoggingExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3: cdktf.listMapper(oceanAwsLoggingExportS3ToTerraform)(struct!.s3),
  }
}

export class OceanAwsLoggingExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLoggingExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLoggingExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3 = value.s3;
    }
  }

  // s3 - computed: false, optional: true, required: false
  private _s3?: OceanAwsLoggingExportS3[] | cdktf.IResolvable; 
  public get s3() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('s3');
  }
  public set s3(value: OceanAwsLoggingExportS3[] | cdktf.IResolvable) {
    this._s3 = value;
  }
  public resetS3() {
    this._s3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3;
  }
}
export interface OceanAwsLogging {
  /**
  * export block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#export OceanAws#export}
  */
  readonly export?: OceanAwsLoggingExport;
}

export function oceanAwsLoggingToTerraform(struct?: OceanAwsLoggingOutputReference | OceanAwsLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export: oceanAwsLoggingExportToTerraform(struct!.export),
  }
}

export class OceanAwsLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._export?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.export = this._export?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._export.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._export.internalValue = value.export;
    }
  }

  // export - computed: false, optional: true, required: false
  private _export = new OceanAwsLoggingExportOutputReference(this, "export");
  public get export() {
    return this._export;
  }
  public putExport(value: OceanAwsLoggingExport) {
    this._export.internalValue = value;
  }
  public resetExport() {
    this._export.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export.internalValue;
  }
}
export interface OceanAwsScheduledTaskShutdownHours {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#is_enabled OceanAws#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#time_windows OceanAws#time_windows}
  */
  readonly timeWindows: string[];
}

export function oceanAwsScheduledTaskShutdownHoursToTerraform(struct?: OceanAwsScheduledTaskShutdownHoursOutputReference | OceanAwsScheduledTaskShutdownHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    time_windows: cdktf.listMapper(cdktf.stringToTerraform)(struct!.timeWindows),
  }
}

export class OceanAwsScheduledTaskShutdownHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsScheduledTaskShutdownHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._timeWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindows = this._timeWindows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsScheduledTaskShutdownHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._timeWindows = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._timeWindows = value.timeWindows;
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

  // time_windows - computed: false, optional: false, required: true
  private _timeWindows?: string[]; 
  public get timeWindows() {
    return this.getListAttribute('time_windows');
  }
  public set timeWindows(value: string[]) {
    this._timeWindows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowsInput() {
    return this._timeWindows;
  }
}
export interface OceanAwsScheduledTaskTasks {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#cron_expression OceanAws#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#is_enabled OceanAws#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#task_type OceanAws#task_type}
  */
  readonly taskType: string;
}

export function oceanAwsScheduledTaskTasksToTerraform(struct?: OceanAwsScheduledTaskTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}

export interface OceanAwsScheduledTask {
  /**
  * shutdown_hours block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#shutdown_hours OceanAws#shutdown_hours}
  */
  readonly shutdownHours?: OceanAwsScheduledTaskShutdownHours;
  /**
  * tasks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#tasks OceanAws#tasks}
  */
  readonly tasks?: OceanAwsScheduledTaskTasks[] | cdktf.IResolvable;
}

export function oceanAwsScheduledTaskToTerraform(struct?: OceanAwsScheduledTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shutdown_hours: oceanAwsScheduledTaskShutdownHoursToTerraform(struct!.shutdownHours),
    tasks: cdktf.listMapper(oceanAwsScheduledTaskTasksToTerraform)(struct!.tasks),
  }
}

export interface OceanAwsTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#key OceanAws#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#value OceanAws#value}
  */
  readonly value: string;
}

export function oceanAwsTagsToTerraform(struct?: OceanAwsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface OceanAwsUpdatePolicyRollConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#batch_min_healthy_percentage OceanAws#batch_min_healthy_percentage}
  */
  readonly batchMinHealthyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#batch_size_percentage OceanAws#batch_size_percentage}
  */
  readonly batchSizePercentage: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#launch_spec_ids OceanAws#launch_spec_ids}
  */
  readonly launchSpecIds?: string[];
}

export function oceanAwsUpdatePolicyRollConfigToTerraform(struct?: OceanAwsUpdatePolicyRollConfigOutputReference | OceanAwsUpdatePolicyRollConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_min_healthy_percentage: cdktf.numberToTerraform(struct!.batchMinHealthyPercentage),
    batch_size_percentage: cdktf.numberToTerraform(struct!.batchSizePercentage),
    launch_spec_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.launchSpecIds),
  }
}

export class OceanAwsUpdatePolicyRollConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsUpdatePolicyRollConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMinHealthyPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMinHealthyPercentage = this._batchMinHealthyPercentage;
    }
    if (this._batchSizePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizePercentage = this._batchSizePercentage;
    }
    if (this._launchSpecIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchSpecIds = this._launchSpecIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAwsUpdatePolicyRollConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchMinHealthyPercentage = undefined;
      this._batchSizePercentage = undefined;
      this._launchSpecIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchMinHealthyPercentage = value.batchMinHealthyPercentage;
      this._batchSizePercentage = value.batchSizePercentage;
      this._launchSpecIds = value.launchSpecIds;
    }
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

  // launch_spec_ids - computed: false, optional: true, required: false
  private _launchSpecIds?: string[]; 
  public get launchSpecIds() {
    return this.getListAttribute('launch_spec_ids');
  }
  public set launchSpecIds(value: string[]) {
    this._launchSpecIds = value;
  }
  public resetLaunchSpecIds() {
    this._launchSpecIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchSpecIdsInput() {
    return this._launchSpecIds;
  }
}
export interface OceanAwsUpdatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#auto_apply_tags OceanAws#auto_apply_tags}
  */
  readonly autoApplyTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#conditioned_roll OceanAws#conditioned_roll}
  */
  readonly conditionedRoll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#should_roll OceanAws#should_roll}
  */
  readonly shouldRoll: boolean | cdktf.IResolvable;
  /**
  * roll_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws#roll_config OceanAws#roll_config}
  */
  readonly rollConfig?: OceanAwsUpdatePolicyRollConfig;
}

export function oceanAwsUpdatePolicyToTerraform(struct?: OceanAwsUpdatePolicyOutputReference | OceanAwsUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_apply_tags: cdktf.booleanToTerraform(struct!.autoApplyTags),
    conditioned_roll: cdktf.booleanToTerraform(struct!.conditionedRoll),
    should_roll: cdktf.booleanToTerraform(struct!.shouldRoll),
    roll_config: oceanAwsUpdatePolicyRollConfigToTerraform(struct!.rollConfig),
  }
}

export class OceanAwsUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAwsUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoApplyTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoApplyTags = this._autoApplyTags;
    }
    if (this._conditionedRoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionedRoll = this._conditionedRoll;
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

  public set internalValue(value: OceanAwsUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoApplyTags = undefined;
      this._conditionedRoll = undefined;
      this._shouldRoll = undefined;
      this._rollConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoApplyTags = value.autoApplyTags;
      this._conditionedRoll = value.conditionedRoll;
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

  // conditioned_roll - computed: false, optional: true, required: false
  private _conditionedRoll?: boolean | cdktf.IResolvable; 
  public get conditionedRoll() {
    return this.getBooleanAttribute('conditioned_roll');
  }
  public set conditionedRoll(value: boolean | cdktf.IResolvable) {
    this._conditionedRoll = value;
  }
  public resetConditionedRoll() {
    this._conditionedRoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionedRollInput() {
    return this._conditionedRoll;
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
  private _rollConfig = new OceanAwsUpdatePolicyRollConfigOutputReference(this, "roll_config");
  public get rollConfig() {
    return this._rollConfig;
  }
  public putRollConfig(value: OceanAwsUpdatePolicyRollConfig) {
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
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws spotinst_ocean_aws}
*/
export class OceanAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_aws";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws spotinst_ocean_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanAwsConfig
  */
  public constructor(scope: Construct, id: string, config: OceanAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_ocean_aws',
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
    this._associatePublicIpAddress = config.associatePublicIpAddress;
    this._blacklist = config.blacklist;
    this._controllerId = config.controllerId;
    this._desiredCapacity = config.desiredCapacity;
    this._drainingTimeout = config.drainingTimeout;
    this._ebsOptimized = config.ebsOptimized;
    this._fallbackToOndemand = config.fallbackToOndemand;
    this._gracePeriod = config.gracePeriod;
    this._iamInstanceProfile = config.iamInstanceProfile;
    this._imageId = config.imageId;
    this._keyName = config.keyName;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._monitoring = config.monitoring;
    this._name = config.name;
    this._region = config.region;
    this._rootVolumeSize = config.rootVolumeSize;
    this._securityGroups = config.securityGroups;
    this._spotPercentage = config.spotPercentage;
    this._subnetIds = config.subnetIds;
    this._useAsTemplateOnly = config.useAsTemplateOnly;
    this._userData = config.userData;
    this._utilizeCommitments = config.utilizeCommitments;
    this._utilizeReservedInstances = config.utilizeReservedInstances;
    this._whitelist = config.whitelist;
    this._autoscaler.internalValue = config.autoscaler;
    this._instanceMetadataOptions.internalValue = config.instanceMetadataOptions;
    this._loadBalancers = config.loadBalancers;
    this._logging.internalValue = config.logging;
    this._scheduledTask = config.scheduledTask;
    this._tags = config.tags;
    this._updatePolicy.internalValue = config.updatePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associate_public_ip_address - computed: false, optional: true, required: false
  private _associatePublicIpAddress?: boolean | cdktf.IResolvable; 
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }
  public set associatePublicIpAddress(value: boolean | cdktf.IResolvable) {
    this._associatePublicIpAddress = value;
  }
  public resetAssociatePublicIpAddress() {
    this._associatePublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatePublicIpAddressInput() {
    return this._associatePublicIpAddress;
  }

  // blacklist - computed: false, optional: true, required: false
  private _blacklist?: string[]; 
  public get blacklist() {
    return this.getListAttribute('blacklist');
  }
  public set blacklist(value: string[]) {
    this._blacklist = value;
  }
  public resetBlacklist() {
    this._blacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistInput() {
    return this._blacklist;
  }

  // controller_id - computed: false, optional: true, required: false
  private _controllerId?: string; 
  public get controllerId() {
    return this.getStringAttribute('controller_id');
  }
  public set controllerId(value: string) {
    this._controllerId = value;
  }
  public resetControllerId() {
    this._controllerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerIdInput() {
    return this._controllerId;
  }

  // desired_capacity - computed: true, optional: true, required: false
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

  // ebs_optimized - computed: false, optional: true, required: false
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

  // max_size - computed: false, optional: true, required: false
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

  // monitoring - computed: false, optional: true, required: false
  private _monitoring?: boolean | cdktf.IResolvable; 
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }
  public set monitoring(value: boolean | cdktf.IResolvable) {
    this._monitoring = value;
  }
  public resetMonitoring() {
    this._monitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // root_volume_size - computed: false, optional: true, required: false
  private _rootVolumeSize?: number; 
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }
  public set rootVolumeSize(value: number) {
    this._rootVolumeSize = value;
  }
  public resetRootVolumeSize() {
    this._rootVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSizeInput() {
    return this._rootVolumeSize;
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

  // use_as_template_only - computed: false, optional: true, required: false
  private _useAsTemplateOnly?: boolean | cdktf.IResolvable; 
  public get useAsTemplateOnly() {
    return this.getBooleanAttribute('use_as_template_only');
  }
  public set useAsTemplateOnly(value: boolean | cdktf.IResolvable) {
    this._useAsTemplateOnly = value;
  }
  public resetUseAsTemplateOnly() {
    this._useAsTemplateOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAsTemplateOnlyInput() {
    return this._useAsTemplateOnly;
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

  // whitelist - computed: false, optional: true, required: false
  private _whitelist?: string[]; 
  public get whitelist() {
    return this.getListAttribute('whitelist');
  }
  public set whitelist(value: string[]) {
    this._whitelist = value;
  }
  public resetWhitelist() {
    this._whitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist;
  }

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new OceanAwsAutoscalerOutputReference(this, "autoscaler");
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: OceanAwsAutoscaler) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // instance_metadata_options - computed: false, optional: true, required: false
  private _instanceMetadataOptions = new OceanAwsInstanceMetadataOptionsOutputReference(this, "instance_metadata_options");
  public get instanceMetadataOptions() {
    return this._instanceMetadataOptions;
  }
  public putInstanceMetadataOptions(value: OceanAwsInstanceMetadataOptions) {
    this._instanceMetadataOptions.internalValue = value;
  }
  public resetInstanceMetadataOptions() {
    this._instanceMetadataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMetadataOptionsInput() {
    return this._instanceMetadataOptions.internalValue;
  }

  // load_balancers - computed: false, optional: true, required: false
  private _loadBalancers?: OceanAwsLoadBalancers[] | cdktf.IResolvable; 
  public get loadBalancers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('load_balancers');
  }
  public set loadBalancers(value: OceanAwsLoadBalancers[] | cdktf.IResolvable) {
    this._loadBalancers = value;
  }
  public resetLoadBalancers() {
    this._loadBalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancersInput() {
    return this._loadBalancers;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new OceanAwsLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: OceanAwsLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // scheduled_task - computed: false, optional: true, required: false
  private _scheduledTask?: OceanAwsScheduledTask[] | cdktf.IResolvable; 
  public get scheduledTask() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scheduled_task')));
  }
  public set scheduledTask(value: OceanAwsScheduledTask[] | cdktf.IResolvable) {
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
  private _tags?: OceanAwsTags[] | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('tags')));
  }
  public set tags(value: OceanAwsTags[] | cdktf.IResolvable) {
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
  private _updatePolicy = new OceanAwsUpdatePolicyOutputReference(this, "update_policy");
  public get updatePolicy() {
    return this._updatePolicy;
  }
  public putUpdatePolicy(value: OceanAwsUpdatePolicy) {
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
      associate_public_ip_address: cdktf.booleanToTerraform(this._associatePublicIpAddress),
      blacklist: cdktf.listMapper(cdktf.stringToTerraform)(this._blacklist),
      controller_id: cdktf.stringToTerraform(this._controllerId),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      draining_timeout: cdktf.numberToTerraform(this._drainingTimeout),
      ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
      fallback_to_ondemand: cdktf.booleanToTerraform(this._fallbackToOndemand),
      grace_period: cdktf.numberToTerraform(this._gracePeriod),
      iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
      image_id: cdktf.stringToTerraform(this._imageId),
      key_name: cdktf.stringToTerraform(this._keyName),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      monitoring: cdktf.booleanToTerraform(this._monitoring),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      root_volume_size: cdktf.numberToTerraform(this._rootVolumeSize),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
      spot_percentage: cdktf.numberToTerraform(this._spotPercentage),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      use_as_template_only: cdktf.booleanToTerraform(this._useAsTemplateOnly),
      user_data: cdktf.stringToTerraform(this._userData),
      utilize_commitments: cdktf.booleanToTerraform(this._utilizeCommitments),
      utilize_reserved_instances: cdktf.booleanToTerraform(this._utilizeReservedInstances),
      whitelist: cdktf.listMapper(cdktf.stringToTerraform)(this._whitelist),
      autoscaler: oceanAwsAutoscalerToTerraform(this._autoscaler.internalValue),
      instance_metadata_options: oceanAwsInstanceMetadataOptionsToTerraform(this._instanceMetadataOptions.internalValue),
      load_balancers: cdktf.listMapper(oceanAwsLoadBalancersToTerraform)(this._loadBalancers),
      logging: oceanAwsLoggingToTerraform(this._logging.internalValue),
      scheduled_task: cdktf.listMapper(oceanAwsScheduledTaskToTerraform)(this._scheduledTask),
      tags: cdktf.listMapper(oceanAwsTagsToTerraform)(this._tags),
      update_policy: oceanAwsUpdatePolicyToTerraform(this._updatePolicy.internalValue),
    };
  }
}
