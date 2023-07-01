package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageOff24: ImageVector
  get() {
    if (_imageOff24 != null) {
      return _imageOff24!!
    }
    _imageOff24 = fluentIcon(name = "Filled.ImageOff24", 24f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(1.263F, 1.264F)
          curveTo(3.177F, 5.04F, 3.0F, 5.624F, 3.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 0.626F, 0.177F, 1.21F, 0.483F, 1.706F)
          lineToRelative(6.926F, -6.926F)
          curveToRelative(0.186F, -0.186F, 0.396F, -0.332F, 0.62F, -0.44F)
          lineToRelative(1.49F, 1.49F)
          curveToRelative(-0.293F, -0.282F, -0.76F, -0.278F, -1.05F, 0.011F)
          lineToRelative(-6.925F, 6.926F)
          curveTo(5.04F, 20.823F, 5.624F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.626F, 0.0F, 1.21F, -0.177F, 1.706F, -0.483F)
          lineToRelative(1.263F, 1.264F)
          curveToRelative(0.293F, 0.292F, 0.768F, 0.292F, 1.061F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.061F)
          lineTo(3.28F, 2.22F)
          close()
          moveTo(21.0F, 17.75F)
          verticalLineToRelative(0.068F)
          lineTo(6.182F, 3.0F)
          horizontalLineTo(17.75F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineToRelative(11.5F)
          close()
          moveTo(16.5F, 9.5F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          close()        
      }
    }
    return _imageOff24!!
  }

private var _imageOff24: ImageVector? = null
