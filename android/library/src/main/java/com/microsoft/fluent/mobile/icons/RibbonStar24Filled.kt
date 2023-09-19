package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RibbonStar24: ImageVector
  get() {
    if (_ribbonStar24 != null) {
      return _ribbonStar24!!
    }
    _ribbonStar24 = fluentIcon(name = "Filled.RibbonStar24", 24f) {
      materialPath {
          moveTo(17.0F, 21.245F)
          lineToRelative(0.002F, -6.0F)
          curveTo(15.632F, 16.342F, 13.892F, 17.0F, 12.0F, 17.0F)
          reflectiveCurveToRelative(-3.63F, -0.657F, -5.0F, -1.754F)
          lineToRelative(0.003F, 6.0F)
          curveToRelative(0.0F, 0.607F, 0.684F, 0.962F, 1.181F, 0.612F)
          lineToRelative(3.817F, -2.687F)
          lineToRelative(3.818F, 2.687F)
          curveToRelative(0.497F, 0.35F, 1.182F, -0.005F, 1.182F, -0.613F)
          close()
          moveTo(19.0F, 9.0F)
          curveToRelative(0.0F, -3.866F, -3.134F, -7.0F, -7.0F, -7.0F)
          reflectiveCurveTo(5.0F, 5.134F, 5.0F, 9.0F)
          reflectiveCurveToRelative(3.134F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveToRelative(7.0F, -3.134F, 7.0F, -7.0F)
          close()
          moveToRelative(-6.771F, -3.358F)
          lineToRelative(0.912F, 1.853F)
          lineToRelative(2.044F, 0.295F)
          curveToRelative(0.21F, 0.03F, 0.293F, 0.288F, 0.142F, 0.435F)
          lineToRelative(-1.479F, 1.44F)
          lineToRelative(0.35F, 2.036F)
          curveToRelative(0.035F, 0.209F, -0.184F, 0.368F, -0.37F, 0.269F)
          lineTo(12.0F, 11.008F)
          lineToRelative(-1.827F, 0.962F)
          curveToRelative(-0.187F, 0.099F, -0.406F, -0.06F, -0.37F, -0.269F)
          lineToRelative(0.35F, -2.035F)
          lineToRelative(-1.48F, -1.44F)
          curveTo(8.522F, 8.078F, 8.605F, 7.82F, 8.815F, 7.79F)
          lineToRelative(2.044F, -0.295F)
          lineToRelative(0.912F, -1.853F)
          curveToRelative(0.094F, -0.19F, 0.364F, -0.19F, 0.458F, 0.0F)
          close()        
      }
    }
    return _ribbonStar24!!
  }

private var _ribbonStar24: ImageVector? = null
