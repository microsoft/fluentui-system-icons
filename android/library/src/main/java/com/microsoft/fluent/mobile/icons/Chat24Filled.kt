package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Chat24: ImageVector
  get() {
    if (_chat24 != null) {
      return _chat24!!
    }
    _chat24 = fluentIcon(name = "Filled.Chat24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          curveToRelative(-1.64F, 0.0F, -3.225F, -0.396F, -4.644F, -1.142F)
          lineToRelative(-4.29F, 1.117F)
          curveToRelative(-0.455F, 0.119F, -0.92F, -0.154F, -1.037F, -0.608F)
          curveToRelative(-0.037F, -0.14F, -0.037F, -0.288F, 0.0F, -0.428F)
          lineToRelative(1.116F, -4.289F)
          curveTo(2.397F, 15.23F, 2.0F, 13.643F, 2.0F, 12.0F)
          curveTo(2.0F, 6.477F, 6.477F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(1.252F, 11.0F)
          horizontalLineTo(8.75F)
          lineToRelative(-0.102F, 0.007F)
          curveTo(8.282F, 13.057F, 8.0F, 13.37F, 8.0F, 13.75F)
          reflectiveCurveToRelative(0.282F, 0.694F, 0.648F, 0.743F)
          lineTo(8.75F, 14.5F)
          horizontalLineToRelative(4.502F)
          lineToRelative(0.101F, -0.007F)
          curveToRelative(0.367F, -0.05F, 0.649F, -0.363F, 0.649F, -0.743F)
          reflectiveCurveToRelative(-0.282F, -0.694F, -0.649F, -0.743F)
          lineTo(13.252F, 13.0F)
          close()
          moveToRelative(1.998F, -3.5F)
          horizontalLineToRelative(-6.5F)
          lineTo(8.648F, 9.507F)
          curveTo(8.282F, 9.557F, 8.0F, 9.87F, 8.0F, 10.25F)
          reflectiveCurveToRelative(0.282F, 0.694F, 0.648F, 0.743F)
          lineTo(8.75F, 11.0F)
          horizontalLineToRelative(6.5F)
          lineToRelative(0.102F, -0.007F)
          curveTo(15.718F, 10.943F, 16.0F, 10.63F, 16.0F, 10.25F)
          reflectiveCurveToRelative(-0.282F, -0.694F, -0.648F, -0.743F)
          lineTo(15.25F, 9.5F)
          close()        
      }
    }
    return _chat24!!
  }

private var _chat24: ImageVector? = null
