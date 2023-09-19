package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Cloud24: ImageVector
  get() {
    if (_cloud24 != null) {
      return _cloud24!!
    }
    _cloud24 = fluentIcon(name = "Filled.Cloud24", 24f) {
      materialPath {
          moveTo(6.08F, 9.02F)
          curveTo(6.548F, 6.171F, 9.02F, 4.0F, 12.0F, 4.0F)
          reflectiveCurveToRelative(5.452F, 2.172F, 5.92F, 5.02F)
          curveTo(20.208F, 9.23F, 22.0F, 11.155F, 22.0F, 13.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(4.015F, 18.0F, 2.0F, 15.985F, 2.0F, 13.5F)
          curveToRelative(0.0F, -2.344F, 1.792F, -4.269F, 4.08F, -4.48F)
          close()        
      }
    }
    return _cloud24!!
  }

private var _cloud24: ImageVector? = null
