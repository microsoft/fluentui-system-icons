package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SlashForward12: ImageVector
  get() {
    if (_slashForward12 != null) {
      return _slashForward12!!
    }
    _slashForward12 = fluentIcon(name = "Filled.SlashForward12", 12f) {
      materialPath {
          moveTo(7.464F, 1.03F)
          curveTo(7.86F, 1.149F, 8.088F, 1.566F, 7.97F, 1.963F)
          lineToRelative(-2.501F, 8.5F)
          curveToRelative(-0.117F, 0.397F, -0.534F, 0.625F, -0.932F, 0.508F)
          curveToRelative(-0.397F, -0.117F, -0.624F, -0.534F, -0.507F, -0.932F)
          lineToRelative(2.502F, -8.5F)
          curveToRelative(0.116F, -0.397F, 0.533F, -0.624F, 0.93F, -0.507F)
          close()        
      }
    }
    return _slashForward12!!
  }

private var _slashForward12: ImageVector? = null
