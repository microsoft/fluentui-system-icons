package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Ribbon12: ImageVector
  get() {
    if (_ribbon12 != null) {
      return _ribbon12!!
    }
    _ribbon12 = fluentIcon(name = "Filled.Ribbon12", 12f) {
      materialPath {
          moveTo(6.0F, 8.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          reflectiveCurveTo(7.933F, 1.0F, 6.0F, 1.0F)
          reflectiveCurveTo(2.5F, 2.567F, 2.5F, 4.5F)
          reflectiveCurveTo(4.067F, 8.0F, 6.0F, 8.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveToRelative(0.729F, 0.0F, 1.412F, -0.195F, 2.0F, -0.535F)
          verticalLineTo(10.5F)
          curveToRelative(0.0F, 0.184F, -0.101F, 0.354F, -0.264F, 0.44F)
          curveToRelative(-0.163F, 0.088F, -0.36F, 0.078F, -0.513F, -0.024F)
          lineTo(6.0F, 10.101F)
          lineToRelative(-1.223F, 0.815F)
          curveToRelative(-0.153F, 0.102F, -0.35F, 0.112F, -0.513F, 0.025F)
          curveTo(4.101F, 10.854F, 4.0F, 10.684F, 4.0F, 10.5F)
          verticalLineTo(8.465F)
          curveTo(4.588F, 8.805F, 5.271F, 9.0F, 6.0F, 9.0F)
          close()        
      }
    }
    return _ribbon12!!
  }

private var _ribbon12: ImageVector? = null
