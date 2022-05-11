// https://www.terraform.io/docs/providers/spotinst/r/ocean_aks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanAksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#acd_identifier OceanAks#acd_identifier}
  */
  readonly acdIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#aks_name OceanAks#aks_name}
  */
  readonly aksName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#aks_resource_group_name OceanAks#aks_resource_group_name}
  */
  readonly aksResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#controller_cluster_id OceanAks#controller_cluster_id}
  */
  readonly controllerClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#custom_data OceanAks#custom_data}
  */
  readonly customData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#name OceanAks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#resource_group_name OceanAks#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#ssh_public_key OceanAks#ssh_public_key}
  */
  readonly sshPublicKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#user_name OceanAks#user_name}
  */
  readonly userName?: string;
  /**
  * autoscaler block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#autoscaler OceanAks#autoscaler}
  */
  readonly autoscaler?: OceanAksAutoscaler;
  /**
  * extension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#extension OceanAks#extension}
  */
  readonly extension?: OceanAksExtension[] | cdktf.IResolvable;
  /**
  * health block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#health OceanAks#health}
  */
  readonly health?: OceanAksHealth;
  /**
  * image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#image OceanAks#image}
  */
  readonly image?: OceanAksImage[] | cdktf.IResolvable;
  /**
  * load_balancer block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#load_balancer OceanAks#load_balancer}
  */
  readonly loadBalancer?: OceanAksLoadBalancer[] | cdktf.IResolvable;
  /**
  * managed_service_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#managed_service_identity OceanAks#managed_service_identity}
  */
  readonly managedServiceIdentity?: OceanAksManagedServiceIdentity[] | cdktf.IResolvable;
  /**
  * network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#network OceanAks#network}
  */
  readonly network?: OceanAksNetwork;
  /**
  * os_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#os_disk OceanAks#os_disk}
  */
  readonly osDisk?: OceanAksOsDisk;
  /**
  * strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#strategy OceanAks#strategy}
  */
  readonly strategy?: OceanAksStrategy[] | cdktf.IResolvable;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#tag OceanAks#tag}
  */
  readonly tag?: OceanAksTag[] | cdktf.IResolvable;
  /**
  * vm_sizes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#vm_sizes OceanAks#vm_sizes}
  */
  readonly vmSizes?: OceanAksVmSizes[] | cdktf.IResolvable;
}
export interface OceanAksAutoscalerAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#max_scale_down_percentage OceanAks#max_scale_down_percentage}
  */
  readonly maxScaleDownPercentage?: number;
}

export function oceanAksAutoscalerAutoscaleDownToTerraform(struct?: OceanAksAutoscalerAutoscaleDownOutputReference | OceanAksAutoscalerAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_scale_down_percentage: cdktf.numberToTerraform(struct!.maxScaleDownPercentage),
  }
}

export class OceanAksAutoscalerAutoscaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksAutoscalerAutoscaleDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxScaleDownPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScaleDownPercentage = this._maxScaleDownPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksAutoscalerAutoscaleDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxScaleDownPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxScaleDownPercentage = value.maxScaleDownPercentage;
    }
  }

  // max_scale_down_percentage - computed: true, optional: true, required: false
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
export interface OceanAksAutoscalerAutoscaleHeadroomAutomatic {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#is_enabled OceanAks#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#percentage OceanAks#percentage}
  */
  readonly percentage?: number;
}

export function oceanAksAutoscalerAutoscaleHeadroomAutomaticToTerraform(struct?: OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference | OceanAksAutoscalerAutoscaleHeadroomAutomatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export class OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksAutoscalerAutoscaleHeadroomAutomatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksAutoscalerAutoscaleHeadroomAutomatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._percentage = value.percentage;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
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

  // percentage - computed: true, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface OceanAksAutoscalerAutoscaleHeadroom {
  /**
  * automatic block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#automatic OceanAks#automatic}
  */
  readonly automatic?: OceanAksAutoscalerAutoscaleHeadroomAutomatic;
}

export function oceanAksAutoscalerAutoscaleHeadroomToTerraform(struct?: OceanAksAutoscalerAutoscaleHeadroomOutputReference | OceanAksAutoscalerAutoscaleHeadroom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic: oceanAksAutoscalerAutoscaleHeadroomAutomaticToTerraform(struct!.automatic),
  }
}

export class OceanAksAutoscalerAutoscaleHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksAutoscalerAutoscaleHeadroom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automatic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatic = this._automatic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksAutoscalerAutoscaleHeadroom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automatic.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automatic.internalValue = value.automatic;
    }
  }

  // automatic - computed: false, optional: true, required: false
  private _automatic = new OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference(this, "automatic");
  public get automatic() {
    return this._automatic;
  }
  public putAutomatic(value: OceanAksAutoscalerAutoscaleHeadroomAutomatic) {
    this._automatic.internalValue = value;
  }
  public resetAutomatic() {
    this._automatic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic.internalValue;
  }
}
export interface OceanAksAutoscalerResourceLimits {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#max_memory_gib OceanAks#max_memory_gib}
  */
  readonly maxMemoryGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#max_vcpu OceanAks#max_vcpu}
  */
  readonly maxVcpu?: number;
}

export function oceanAksAutoscalerResourceLimitsToTerraform(struct?: OceanAksAutoscalerResourceLimitsOutputReference | OceanAksAutoscalerResourceLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_memory_gib: cdktf.numberToTerraform(struct!.maxMemoryGib),
    max_vcpu: cdktf.numberToTerraform(struct!.maxVcpu),
  }
}

export class OceanAksAutoscalerResourceLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksAutoscalerResourceLimits | undefined {
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

  public set internalValue(value: OceanAksAutoscalerResourceLimits | undefined) {
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

  // max_memory_gib - computed: true, optional: true, required: false
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
export interface OceanAksAutoscaler {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#autoscale_is_enabled OceanAks#autoscale_is_enabled}
  */
  readonly autoscaleIsEnabled?: boolean | cdktf.IResolvable;
  /**
  * autoscale_down block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#autoscale_down OceanAks#autoscale_down}
  */
  readonly autoscaleDown?: OceanAksAutoscalerAutoscaleDown;
  /**
  * autoscale_headroom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#autoscale_headroom OceanAks#autoscale_headroom}
  */
  readonly autoscaleHeadroom?: OceanAksAutoscalerAutoscaleHeadroom;
  /**
  * resource_limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#resource_limits OceanAks#resource_limits}
  */
  readonly resourceLimits?: OceanAksAutoscalerResourceLimits;
}

export function oceanAksAutoscalerToTerraform(struct?: OceanAksAutoscalerOutputReference | OceanAksAutoscaler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale_is_enabled: cdktf.booleanToTerraform(struct!.autoscaleIsEnabled),
    autoscale_down: oceanAksAutoscalerAutoscaleDownToTerraform(struct!.autoscaleDown),
    autoscale_headroom: oceanAksAutoscalerAutoscaleHeadroomToTerraform(struct!.autoscaleHeadroom),
    resource_limits: oceanAksAutoscalerResourceLimitsToTerraform(struct!.resourceLimits),
  }
}

export class OceanAksAutoscalerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksAutoscaler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaleIsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleIsEnabled = this._autoscaleIsEnabled;
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

  public set internalValue(value: OceanAksAutoscaler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscaleIsEnabled = undefined;
      this._autoscaleDown.internalValue = undefined;
      this._autoscaleHeadroom.internalValue = undefined;
      this._resourceLimits.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscaleIsEnabled = value.autoscaleIsEnabled;
      this._autoscaleDown.internalValue = value.autoscaleDown;
      this._autoscaleHeadroom.internalValue = value.autoscaleHeadroom;
      this._resourceLimits.internalValue = value.resourceLimits;
    }
  }

  // autoscale_is_enabled - computed: true, optional: true, required: false
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

  // autoscale_down - computed: false, optional: true, required: false
  private _autoscaleDown = new OceanAksAutoscalerAutoscaleDownOutputReference(this, "autoscale_down");
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: OceanAksAutoscalerAutoscaleDown) {
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
  private _autoscaleHeadroom = new OceanAksAutoscalerAutoscaleHeadroomOutputReference(this, "autoscale_headroom");
  public get autoscaleHeadroom() {
    return this._autoscaleHeadroom;
  }
  public putAutoscaleHeadroom(value: OceanAksAutoscalerAutoscaleHeadroom) {
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
  private _resourceLimits = new OceanAksAutoscalerResourceLimitsOutputReference(this, "resource_limits");
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: OceanAksAutoscalerResourceLimits) {
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
export interface OceanAksExtension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#api_version OceanAks#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#minor_version_auto_upgrade OceanAks#minor_version_auto_upgrade}
  */
  readonly minorVersionAutoUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#name OceanAks#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#publisher OceanAks#publisher}
  */
  readonly publisher?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#type OceanAks#type}
  */
  readonly type?: string;
}

export function oceanAksExtensionToTerraform(struct?: OceanAksExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    minor_version_auto_upgrade: cdktf.booleanToTerraform(struct!.minorVersionAutoUpgrade),
    name: cdktf.stringToTerraform(struct!.name),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface OceanAksHealth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#grace_period OceanAks#grace_period}
  */
  readonly gracePeriod?: number;
}

export function oceanAksHealthToTerraform(struct?: OceanAksHealthOutputReference | OceanAksHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
  }
}

export class OceanAksHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gracePeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gracePeriod = value.gracePeriod;
    }
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
}
export interface OceanAksImageMarketplace {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#offer OceanAks#offer}
  */
  readonly offer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#publisher OceanAks#publisher}
  */
  readonly publisher?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#sku OceanAks#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#version OceanAks#version}
  */
  readonly version?: string;
}

export function oceanAksImageMarketplaceToTerraform(struct?: OceanAksImageMarketplace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface OceanAksImage {
  /**
  * marketplace block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#marketplace OceanAks#marketplace}
  */
  readonly marketplace?: OceanAksImageMarketplace[] | cdktf.IResolvable;
}

export function oceanAksImageToTerraform(struct?: OceanAksImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    marketplace: cdktf.listMapper(oceanAksImageMarketplaceToTerraform)(struct!.marketplace),
  }
}

export interface OceanAksLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#backend_pool_names OceanAks#backend_pool_names}
  */
  readonly backendPoolNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#load_balancer_sku OceanAks#load_balancer_sku}
  */
  readonly loadBalancerSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#name OceanAks#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#resource_group_name OceanAks#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#type OceanAks#type}
  */
  readonly type?: string;
}

export function oceanAksLoadBalancerToTerraform(struct?: OceanAksLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_pool_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.backendPoolNames),
    load_balancer_sku: cdktf.stringToTerraform(struct!.loadBalancerSku),
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface OceanAksManagedServiceIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#name OceanAks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#resource_group_name OceanAks#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function oceanAksManagedServiceIdentityToTerraform(struct?: OceanAksManagedServiceIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}

export interface OceanAksNetworkNetworkInterfaceAdditionalIpConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#name OceanAks#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#private_ip_version OceanAks#private_ip_version}
  */
  readonly privateIpVersion?: string;
}

export function oceanAksNetworkNetworkInterfaceAdditionalIpConfigToTerraform(struct?: OceanAksNetworkNetworkInterfaceAdditionalIpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    private_ip_version: cdktf.stringToTerraform(struct!.privateIpVersion),
  }
}

export interface OceanAksNetworkNetworkInterfaceSecurityGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#name OceanAks#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#resource_group_name OceanAks#resource_group_name}
  */
  readonly resourceGroupName?: string;
}

export function oceanAksNetworkNetworkInterfaceSecurityGroupToTerraform(struct?: OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference | OceanAksNetworkNetworkInterfaceSecurityGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}

export class OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNetworkNetworkInterfaceSecurityGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNetworkNetworkInterfaceSecurityGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._resourceGroupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._resourceGroupName = value.resourceGroupName;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }
}
export interface OceanAksNetworkNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#assign_public_ip OceanAks#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#is_primary OceanAks#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#subnet_name OceanAks#subnet_name}
  */
  readonly subnetName?: string;
  /**
  * additional_ip_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#additional_ip_config OceanAks#additional_ip_config}
  */
  readonly additionalIpConfig?: OceanAksNetworkNetworkInterfaceAdditionalIpConfig[] | cdktf.IResolvable;
  /**
  * security_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#security_group OceanAks#security_group}
  */
  readonly securityGroup?: OceanAksNetworkNetworkInterfaceSecurityGroup;
}

export function oceanAksNetworkNetworkInterfaceToTerraform(struct?: OceanAksNetworkNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    additional_ip_config: cdktf.listMapper(oceanAksNetworkNetworkInterfaceAdditionalIpConfigToTerraform)(struct!.additionalIpConfig),
    security_group: oceanAksNetworkNetworkInterfaceSecurityGroupToTerraform(struct!.securityGroup),
  }
}

export interface OceanAksNetwork {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#resource_group_name OceanAks#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#virtual_network_name OceanAks#virtual_network_name}
  */
  readonly virtualNetworkName?: string;
  /**
  * network_interface block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#network_interface OceanAks#network_interface}
  */
  readonly networkInterface?: OceanAksNetworkNetworkInterface[] | cdktf.IResolvable;
}

export function oceanAksNetworkToTerraform(struct?: OceanAksNetworkOutputReference | OceanAksNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    virtual_network_name: cdktf.stringToTerraform(struct!.virtualNetworkName),
    network_interface: cdktf.listMapper(oceanAksNetworkNetworkInterfaceToTerraform)(struct!.networkInterface),
  }
}

export class OceanAksNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._virtualNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkName = this._virtualNetworkName;
    }
    if (this._networkInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterface = this._networkInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceGroupName = undefined;
      this._virtualNetworkName = undefined;
      this._networkInterface = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceGroupName = value.resourceGroupName;
      this._virtualNetworkName = value.virtualNetworkName;
      this._networkInterface = value.networkInterface;
    }
  }

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // virtual_network_name - computed: true, optional: true, required: false
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  public resetVirtualNetworkName() {
    this._virtualNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface?: OceanAksNetworkNetworkInterface[] | cdktf.IResolvable; 
  public get networkInterface() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('network_interface')));
  }
  public set networkInterface(value: OceanAksNetworkNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface = value;
  }
  public resetNetworkInterface() {
    this._networkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface;
  }
}
export interface OceanAksOsDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#size_gb OceanAks#size_gb}
  */
  readonly sizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#type OceanAks#type}
  */
  readonly type?: string;
}

export function oceanAksOsDiskToTerraform(struct?: OceanAksOsDiskOutputReference | OceanAksOsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class OceanAksOsDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksOsDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanAksOsDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sizeGb = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sizeGb = value.sizeGb;
      this._type = value.type;
    }
  }

  // size_gb - computed: false, optional: false, required: true
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface OceanAksStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#fallback_to_ondemand OceanAks#fallback_to_ondemand}
  */
  readonly fallbackToOndemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#spot_percentage OceanAks#spot_percentage}
  */
  readonly spotPercentage?: number;
}

export function oceanAksStrategyToTerraform(struct?: OceanAksStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_to_ondemand: cdktf.booleanToTerraform(struct!.fallbackToOndemand),
    spot_percentage: cdktf.numberToTerraform(struct!.spotPercentage),
  }
}

export interface OceanAksTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#key OceanAks#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#value OceanAks#value}
  */
  readonly value?: string;
}

export function oceanAksTagToTerraform(struct?: OceanAksTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface OceanAksVmSizes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks#whitelist OceanAks#whitelist}
  */
  readonly whitelist?: string[];
}

export function oceanAksVmSizesToTerraform(struct?: OceanAksVmSizes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    whitelist: cdktf.listMapper(cdktf.stringToTerraform)(struct!.whitelist),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks spotinst_ocean_aks}
*/
export class OceanAks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_aks";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks spotinst_ocean_aks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanAksConfig
  */
  public constructor(scope: Construct, id: string, config: OceanAksConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_ocean_aks',
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
    this._acdIdentifier = config.acdIdentifier;
    this._aksName = config.aksName;
    this._aksResourceGroupName = config.aksResourceGroupName;
    this._controllerClusterId = config.controllerClusterId;
    this._customData = config.customData;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sshPublicKey = config.sshPublicKey;
    this._userName = config.userName;
    this._autoscaler.internalValue = config.autoscaler;
    this._extension = config.extension;
    this._health.internalValue = config.health;
    this._image = config.image;
    this._loadBalancer = config.loadBalancer;
    this._managedServiceIdentity = config.managedServiceIdentity;
    this._network.internalValue = config.network;
    this._osDisk.internalValue = config.osDisk;
    this._strategy = config.strategy;
    this._tag = config.tag;
    this._vmSizes = config.vmSizes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acd_identifier - computed: false, optional: false, required: true
  private _acdIdentifier?: string; 
  public get acdIdentifier() {
    return this.getStringAttribute('acd_identifier');
  }
  public set acdIdentifier(value: string) {
    this._acdIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acdIdentifierInput() {
    return this._acdIdentifier;
  }

  // aks_name - computed: false, optional: false, required: true
  private _aksName?: string; 
  public get aksName() {
    return this.getStringAttribute('aks_name');
  }
  public set aksName(value: string) {
    this._aksName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aksNameInput() {
    return this._aksName;
  }

  // aks_resource_group_name - computed: false, optional: false, required: true
  private _aksResourceGroupName?: string; 
  public get aksResourceGroupName() {
    return this.getStringAttribute('aks_resource_group_name');
  }
  public set aksResourceGroupName(value: string) {
    this._aksResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aksResourceGroupNameInput() {
    return this._aksResourceGroupName;
  }

  // controller_cluster_id - computed: true, optional: true, required: false
  private _controllerClusterId?: string; 
  public get controllerClusterId() {
    return this.getStringAttribute('controller_cluster_id');
  }
  public set controllerClusterId(value: string) {
    this._controllerClusterId = value;
  }
  public resetControllerClusterId() {
    this._controllerClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerClusterIdInput() {
    return this._controllerClusterId;
  }

  // custom_data - computed: true, optional: true, required: false
  private _customData?: string; 
  public get customData() {
    return this.getStringAttribute('custom_data');
  }
  public set customData(value: string) {
    this._customData = value;
  }
  public resetCustomData() {
    this._customData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // ssh_public_key - computed: false, optional: false, required: true
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new OceanAksAutoscalerOutputReference(this, "autoscaler");
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: OceanAksAutoscaler) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: OceanAksExtension[] | cdktf.IResolvable; 
  public get extension() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('extension')));
  }
  public set extension(value: OceanAksExtension[] | cdktf.IResolvable) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }

  // health - computed: false, optional: true, required: false
  private _health = new OceanAksHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: OceanAksHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: OceanAksImage[] | cdktf.IResolvable; 
  public get image() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('image');
  }
  public set image(value: OceanAksImage[] | cdktf.IResolvable) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer?: OceanAksLoadBalancer[] | cdktf.IResolvable; 
  public get loadBalancer() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('load_balancer')));
  }
  public set loadBalancer(value: OceanAksLoadBalancer[] | cdktf.IResolvable) {
    this._loadBalancer = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer;
  }

  // managed_service_identity - computed: false, optional: true, required: false
  private _managedServiceIdentity?: OceanAksManagedServiceIdentity[] | cdktf.IResolvable; 
  public get managedServiceIdentity() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('managed_service_identity')));
  }
  public set managedServiceIdentity(value: OceanAksManagedServiceIdentity[] | cdktf.IResolvable) {
    this._managedServiceIdentity = value;
  }
  public resetManagedServiceIdentity() {
    this._managedServiceIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedServiceIdentityInput() {
    return this._managedServiceIdentity;
  }

  // network - computed: false, optional: true, required: false
  private _network = new OceanAksNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: OceanAksNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // os_disk - computed: false, optional: true, required: false
  private _osDisk = new OceanAksOsDiskOutputReference(this, "os_disk");
  public get osDisk() {
    return this._osDisk;
  }
  public putOsDisk(value: OceanAksOsDisk) {
    this._osDisk.internalValue = value;
  }
  public resetOsDisk() {
    this._osDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: OceanAksStrategy[] | cdktf.IResolvable; 
  public get strategy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('strategy');
  }
  public set strategy(value: OceanAksStrategy[] | cdktf.IResolvable) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: OceanAksTag[] | cdktf.IResolvable; 
  public get tag() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('tag')));
  }
  public set tag(value: OceanAksTag[] | cdktf.IResolvable) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // vm_sizes - computed: false, optional: true, required: false
  private _vmSizes?: OceanAksVmSizes[] | cdktf.IResolvable; 
  public get vmSizes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('vm_sizes');
  }
  public set vmSizes(value: OceanAksVmSizes[] | cdktf.IResolvable) {
    this._vmSizes = value;
  }
  public resetVmSizes() {
    this._vmSizes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizesInput() {
    return this._vmSizes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acd_identifier: cdktf.stringToTerraform(this._acdIdentifier),
      aks_name: cdktf.stringToTerraform(this._aksName),
      aks_resource_group_name: cdktf.stringToTerraform(this._aksResourceGroupName),
      controller_cluster_id: cdktf.stringToTerraform(this._controllerClusterId),
      custom_data: cdktf.stringToTerraform(this._customData),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      user_name: cdktf.stringToTerraform(this._userName),
      autoscaler: oceanAksAutoscalerToTerraform(this._autoscaler.internalValue),
      extension: cdktf.listMapper(oceanAksExtensionToTerraform)(this._extension),
      health: oceanAksHealthToTerraform(this._health.internalValue),
      image: cdktf.listMapper(oceanAksImageToTerraform)(this._image),
      load_balancer: cdktf.listMapper(oceanAksLoadBalancerToTerraform)(this._loadBalancer),
      managed_service_identity: cdktf.listMapper(oceanAksManagedServiceIdentityToTerraform)(this._managedServiceIdentity),
      network: oceanAksNetworkToTerraform(this._network.internalValue),
      os_disk: oceanAksOsDiskToTerraform(this._osDisk.internalValue),
      strategy: cdktf.listMapper(oceanAksStrategyToTerraform)(this._strategy),
      tag: cdktf.listMapper(oceanAksTagToTerraform)(this._tag),
      vm_sizes: cdktf.listMapper(oceanAksVmSizesToTerraform)(this._vmSizes),
    };
  }
}
