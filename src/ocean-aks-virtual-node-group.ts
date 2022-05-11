// https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanAksVirtualNodeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#name OceanAksVirtualNodeGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#ocean_id OceanAksVirtualNodeGroup#ocean_id}
  */
  readonly oceanId: string;
  /**
  * autoscale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#autoscale OceanAksVirtualNodeGroup#autoscale}
  */
  readonly autoscale?: OceanAksVirtualNodeGroupAutoscale[] | cdktf.IResolvable;
  /**
  * label block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#label OceanAksVirtualNodeGroup#label}
  */
  readonly label?: OceanAksVirtualNodeGroupLabel[] | cdktf.IResolvable;
  /**
  * launch_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#launch_specification OceanAksVirtualNodeGroup#launch_specification}
  */
  readonly launchSpecification?: OceanAksVirtualNodeGroupLaunchSpecification[] | cdktf.IResolvable;
  /**
  * resource_limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#resource_limits OceanAksVirtualNodeGroup#resource_limits}
  */
  readonly resourceLimits?: OceanAksVirtualNodeGroupResourceLimits[] | cdktf.IResolvable;
  /**
  * taint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#taint OceanAksVirtualNodeGroup#taint}
  */
  readonly taint?: OceanAksVirtualNodeGroupTaint[] | cdktf.IResolvable;
}
export interface OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#cpu_per_unit OceanAksVirtualNodeGroup#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#gpu_per_unit OceanAksVirtualNodeGroup#gpu_per_unit}
  */
  readonly gpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#memory_per_unit OceanAksVirtualNodeGroup#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#num_of_units OceanAksVirtualNodeGroup#num_of_units}
  */
  readonly numOfUnits: number;
}

export function oceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomToTerraform(struct?: OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom | cdktf.IResolvable): any {
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

export interface OceanAksVirtualNodeGroupAutoscale {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#auto_headroom_percentage OceanAksVirtualNodeGroup#auto_headroom_percentage}
  */
  readonly autoHeadroomPercentage?: number;
  /**
  * autoscale_headroom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#autoscale_headroom OceanAksVirtualNodeGroup#autoscale_headroom}
  */
  readonly autoscaleHeadroom?: OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom[] | cdktf.IResolvable;
}

export function oceanAksVirtualNodeGroupAutoscaleToTerraform(struct?: OceanAksVirtualNodeGroupAutoscale | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_headroom_percentage: cdktf.numberToTerraform(struct!.autoHeadroomPercentage),
    autoscale_headroom: cdktf.listMapper(oceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomToTerraform)(struct!.autoscaleHeadroom),
  }
}

export interface OceanAksVirtualNodeGroupLabel {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}
  */
  readonly value?: string;
}

export function oceanAksVirtualNodeGroupLabelToTerraform(struct?: OceanAksVirtualNodeGroupLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface OceanAksVirtualNodeGroupLaunchSpecificationOsDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#size_gb OceanAksVirtualNodeGroup#size_gb}
  */
  readonly sizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#type OceanAksVirtualNodeGroup#type}
  */
  readonly type?: string;
}

export function oceanAksVirtualNodeGroupLaunchSpecificationOsDiskToTerraform(struct?: OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference | OceanAksVirtualNodeGroupLaunchSpecificationOsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanAksVirtualNodeGroupLaunchSpecificationOsDisk | undefined {
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

  public set internalValue(value: OceanAksVirtualNodeGroupLaunchSpecificationOsDisk | undefined) {
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
export interface OceanAksVirtualNodeGroupLaunchSpecificationTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}
  */
  readonly value?: string;
}

export function oceanAksVirtualNodeGroupLaunchSpecificationTagToTerraform(struct?: OceanAksVirtualNodeGroupLaunchSpecificationTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface OceanAksVirtualNodeGroupLaunchSpecification {
  /**
  * os_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#os_disk OceanAksVirtualNodeGroup#os_disk}
  */
  readonly osDisk?: OceanAksVirtualNodeGroupLaunchSpecificationOsDisk;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#tag OceanAksVirtualNodeGroup#tag}
  */
  readonly tag?: OceanAksVirtualNodeGroupLaunchSpecificationTag[] | cdktf.IResolvable;
}

export function oceanAksVirtualNodeGroupLaunchSpecificationToTerraform(struct?: OceanAksVirtualNodeGroupLaunchSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os_disk: oceanAksVirtualNodeGroupLaunchSpecificationOsDiskToTerraform(struct!.osDisk),
    tag: cdktf.listMapper(oceanAksVirtualNodeGroupLaunchSpecificationTagToTerraform)(struct!.tag),
  }
}

export interface OceanAksVirtualNodeGroupResourceLimits {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#max_instance_count OceanAksVirtualNodeGroup#max_instance_count}
  */
  readonly maxInstanceCount?: number;
}

export function oceanAksVirtualNodeGroupResourceLimitsToTerraform(struct?: OceanAksVirtualNodeGroupResourceLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_instance_count: cdktf.numberToTerraform(struct!.maxInstanceCount),
  }
}

export interface OceanAksVirtualNodeGroupTaint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#effect OceanAksVirtualNodeGroup#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}
  */
  readonly value: string;
}

export function oceanAksVirtualNodeGroupTaintToTerraform(struct?: OceanAksVirtualNodeGroupTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group spotinst_ocean_aks_virtual_node_group}
*/
export class OceanAksVirtualNodeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_aks_virtual_node_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_virtual_node_group spotinst_ocean_aks_virtual_node_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanAksVirtualNodeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: OceanAksVirtualNodeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_ocean_aks_virtual_node_group',
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
    this._name = config.name;
    this._oceanId = config.oceanId;
    this._autoscale = config.autoscale;
    this._label = config.label;
    this._launchSpecification = config.launchSpecification;
    this._resourceLimits = config.resourceLimits;
    this._taint = config.taint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ocean_id - computed: false, optional: false, required: true
  private _oceanId?: string; 
  public get oceanId() {
    return this.getStringAttribute('ocean_id');
  }
  public set oceanId(value: string) {
    this._oceanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oceanIdInput() {
    return this._oceanId;
  }

  // autoscale - computed: false, optional: true, required: false
  private _autoscale?: OceanAksVirtualNodeGroupAutoscale[] | cdktf.IResolvable; 
  public get autoscale() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('autoscale');
  }
  public set autoscale(value: OceanAksVirtualNodeGroupAutoscale[] | cdktf.IResolvable) {
    this._autoscale = value;
  }
  public resetAutoscale() {
    this._autoscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale;
  }

  // label - computed: false, optional: true, required: false
  private _label?: OceanAksVirtualNodeGroupLabel[] | cdktf.IResolvable; 
  public get label() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('label')));
  }
  public set label(value: OceanAksVirtualNodeGroupLabel[] | cdktf.IResolvable) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // launch_specification - computed: false, optional: true, required: false
  private _launchSpecification?: OceanAksVirtualNodeGroupLaunchSpecification[] | cdktf.IResolvable; 
  public get launchSpecification() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('launch_specification');
  }
  public set launchSpecification(value: OceanAksVirtualNodeGroupLaunchSpecification[] | cdktf.IResolvable) {
    this._launchSpecification = value;
  }
  public resetLaunchSpecification() {
    this._launchSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchSpecificationInput() {
    return this._launchSpecification;
  }

  // resource_limits - computed: false, optional: true, required: false
  private _resourceLimits?: OceanAksVirtualNodeGroupResourceLimits[] | cdktf.IResolvable; 
  public get resourceLimits() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_limits');
  }
  public set resourceLimits(value: OceanAksVirtualNodeGroupResourceLimits[] | cdktf.IResolvable) {
    this._resourceLimits = value;
  }
  public resetResourceLimits() {
    this._resourceLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits;
  }

  // taint - computed: false, optional: true, required: false
  private _taint?: OceanAksVirtualNodeGroupTaint[] | cdktf.IResolvable; 
  public get taint() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('taint')));
  }
  public set taint(value: OceanAksVirtualNodeGroupTaint[] | cdktf.IResolvable) {
    this._taint = value;
  }
  public resetTaint() {
    this._taint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      ocean_id: cdktf.stringToTerraform(this._oceanId),
      autoscale: cdktf.listMapper(oceanAksVirtualNodeGroupAutoscaleToTerraform)(this._autoscale),
      label: cdktf.listMapper(oceanAksVirtualNodeGroupLabelToTerraform)(this._label),
      launch_specification: cdktf.listMapper(oceanAksVirtualNodeGroupLaunchSpecificationToTerraform)(this._launchSpecification),
      resource_limits: cdktf.listMapper(oceanAksVirtualNodeGroupResourceLimitsToTerraform)(this._resourceLimits),
      taint: cdktf.listMapper(oceanAksVirtualNodeGroupTaintToTerraform)(this._taint),
    };
  }
}
