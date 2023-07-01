package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Ribbon24: ImageVector
  get() {
    if (_ribbon24 != null) {
      return _ribbon24!!
    }
    _ribbon24 = fluentIcon(name = "Regular.Ribbon24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(3.866F, 0.0F, 7.0F, 3.134F, 7.0F, 7.0F)
          curveToRelative(0.0F, 1.907F, -0.763F, 3.636F, -2.0F, 4.898F)
          verticalLineToRelative(7.352F)
          curveToRelative(0.0F, 0.572F, -0.607F, 0.92F, -1.093F, 0.668F)
          lineToRelative(-0.09F, -0.055F)
          lineTo(12.0F, 19.176F)
          lineToRelative(-3.816F, 2.687F)
          curveToRelative(-0.468F, 0.33F, -1.102F, 0.034F, -1.175F, -0.508F)
          lineTo(7.0F, 21.25F)
          lineToRelative(-0.002F, -7.352F)
          curveTo(5.763F, 12.636F, 5.0F, 10.907F, 5.0F, 9.0F)
          curveToRelative(0.0F, -3.866F, 3.134F, -7.0F, 7.0F, -7.0F)
          close()
          moveToRelative(3.5F, 17.805F)
          verticalLineToRelative(-4.741F)
          curveTo(14.47F, 15.659F, 13.274F, 16.0F, 12.0F, 16.0F)
          reflectiveCurveToRelative(-2.47F, -0.34F, -3.5F, -0.936F)
          verticalLineToRelative(4.74F)
          lineToRelative(3.067F, -2.159F)
          curveToRelative(0.227F, -0.16F, 0.52F, -0.18F, 0.763F, -0.06F)
          lineToRelative(0.1F, 0.06F)
          lineToRelative(3.07F, 2.16F)
          verticalLineToRelative(-4.741F)
          close()
          moveTo(12.0F, 3.5F)
          curveTo(8.962F, 3.5F, 6.5F, 5.962F, 6.5F, 9.0F)
          reflectiveCurveToRelative(2.462F, 5.5F, 5.5F, 5.5F)
          reflectiveCurveToRelative(5.5F, -2.462F, 5.5F, -5.5F)
          reflectiveCurveToRelative(-2.462F, -5.5F, -5.5F, -5.5F)
          close()        
      }
    }
    return _ribbon24!!
  }

private var _ribbon24: ImageVector? = null
