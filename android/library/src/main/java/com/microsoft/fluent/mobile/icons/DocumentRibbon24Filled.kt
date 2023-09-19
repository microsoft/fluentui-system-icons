package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentRibbon24: ImageVector
  get() {
    if (_documentRibbon24 != null) {
      return _documentRibbon24!!
    }
    _documentRibbon24 = fluentIcon(name = "Filled.DocumentRibbon24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.001F, 2.0F, 2.001F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(10.001F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(-3.671F)
          curveToRelative(0.625F, -0.773F, 1.0F, -1.758F, 1.0F, -2.83F)
          curveToRelative(0.0F, -2.485F, -2.015F, -4.5F, -4.5F, -4.5F)
          curveToRelative(-0.526F, 0.0F, -1.03F, 0.09F, -1.5F, 0.256F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.104F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(6.0F)
          close()
          moveToRelative(1.5F, 0.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 0.277F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(5.5F)
          lineToRelative(-6.0F, -6.0F)
          close()
          moveTo(9.0F, 15.502F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          reflectiveCurveTo(2.0F, 17.435F, 2.0F, 15.502F)
          curveToRelative(0.0F, -1.934F, 1.567F, -3.5F, 3.5F, -3.5F)
          reflectiveCurveToRelative(3.5F, 1.566F, 3.5F, 3.5F)
          close()
          moveToRelative(-6.0F, 3.742F)
          verticalLineToRelative(3.044F)
          curveToRelative(0.0F, 0.633F, 0.765F, 0.95F, 1.212F, 0.503F)
          lineTo(5.5F, 21.503F)
          lineToRelative(1.288F, 1.288F)
          curveTo(7.235F, 23.238F, 8.0F, 22.92F, 8.0F, 22.288F)
          verticalLineToRelative(-3.044F)
          curveToRelative(-0.715F, 0.48F, -1.575F, 0.758F, -2.5F, 0.758F)
          reflectiveCurveTo(3.715F, 19.723F, 3.0F, 19.244F)
          close()        
      }
    }
    return _documentRibbon24!!
  }

private var _documentRibbon24: ImageVector? = null
