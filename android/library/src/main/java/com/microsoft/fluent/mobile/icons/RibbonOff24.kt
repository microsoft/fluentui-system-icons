package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RibbonOff24: ImageVector
  get() {
    if (_ribbonOff24 != null) {
      return _ribbonOff24!!
    }
    _ribbonOff24 = fluentIcon(name = "Filled.RibbonOff24", 24f) {
      materialPath {
          moveTo(5.454F, 6.515F)
          curveTo(5.161F, 7.287F, 5.0F, 8.125F, 5.0F, 9.0F)
          curveToRelative(0.0F, 3.866F, 3.134F, 7.0F, 7.0F, 7.0F)
          curveToRelative(0.875F, 0.0F, 1.713F, -0.16F, 2.485F, -0.454F)
          lineToRelative(0.766F, 0.766F)
          curveTo(14.258F, 16.754F, 13.158F, 17.0F, 12.0F, 17.0F)
          curveToRelative(-1.892F, 0.0F, -3.63F, -0.657F, -5.0F, -1.754F)
          lineToRelative(0.003F, 6.0F)
          curveToRelative(0.0F, 0.607F, 0.684F, 0.962F, 1.181F, 0.612F)
          lineToRelative(3.817F, -2.687F)
          lineToRelative(3.818F, 2.687F)
          curveToRelative(0.497F, 0.35F, 1.182F, -0.005F, 1.182F, -0.613F)
          verticalLineToRelative(-3.183F)
          lineToRelative(3.718F, 3.718F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.061F, 0.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(3.234F, 3.235F)
          close()
          moveTo(7.142F, 3.96F)
          lineToRelative(9.898F, 9.898F)
          curveTo(18.253F, 12.599F, 19.0F, 10.887F, 19.0F, 9.0F)
          curveToRelative(0.0F, -3.866F, -3.134F, -7.0F, -7.0F, -7.0F)
          curveToRelative(-1.887F, 0.0F, -3.6F, 0.746F, -4.858F, 1.96F)
          close()        
      }
    }
    return _ribbonOff24!!
  }

private var _ribbonOff24: ImageVector? = null
