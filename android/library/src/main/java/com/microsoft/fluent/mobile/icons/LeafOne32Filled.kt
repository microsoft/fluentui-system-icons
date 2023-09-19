package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LeafOne32: ImageVector
  get() {
    if (_leafOne32 != null) {
      return _leafOne32!!
    }
    _leafOne32 = fluentIcon(name = "Filled.LeafOne32", 32f) {
      materialPath {
          moveTo(14.05F, 3.808F)
          curveToRelative(1.077F, -1.077F, 2.823F, -1.077F, 3.9F, 0.0F)
          lineToRelative(5.121F, 5.12F)
          curveToRelative(0.488F, 0.489F, 0.915F, 1.015F, 1.281F, 1.57F)
          curveToRelative(2.563F, 3.881F, 2.136F, 9.156F, -1.28F, 12.573F)
          lineToRelative(-0.08F, 0.079F)
          curveToRelative(-0.188F, 0.183F, -0.38F, 0.358F, -0.578F, 0.523F)
          curveToRelative(-1.581F, 1.324F, -3.475F, 2.083F, -5.414F, 2.277F)
          verticalLineTo(29.0F)
          curveToRelative(0.0F, 0.553F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.447F, -1.0F, -1.0F)
          verticalLineToRelative(-3.05F)
          curveToRelative(-1.662F, -0.166F, -3.291F, -0.747F, -4.718F, -1.744F)
          curveToRelative(-0.475F, -0.332F, -0.929F, -0.71F, -1.353F, -1.135F)
          curveTo(6.967F, 21.109F, 5.99F, 18.536F, 6.0F, 15.965F)
          curveToRelative(0.002F, -0.628F, 0.063F, -1.256F, 0.183F, -1.875F)
          curveToRelative(0.169F, -0.87F, 0.454F, -1.723F, 0.855F, -2.533F)
          curveToRelative(0.47F, -0.948F, 1.1F, -1.838F, 1.89F, -2.628F)
          lineToRelative(5.122F, -5.121F)
          close()
          moveTo(15.0F, 23.938F)
          curveToRelative(0.664F, 0.083F, 1.336F, 0.083F, 2.0F, 0.0F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, -0.553F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.447F, -1.0F, 1.0F)
          verticalLineToRelative(8.937F)
          close()        
      }
    }
    return _leafOne32!!
  }

private var _leafOne32: ImageVector? = null
