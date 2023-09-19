package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RibbonOff12: ImageVector
  get() {
    if (_ribbonOff12 != null) {
      return _ribbonOff12!!
    }
    _ribbonOff12 = fluentIcon(name = "Filled.RibbonOff12", 12f) {
      materialPath {
          moveTo(2.68F, 3.388F)
          curveTo(2.563F, 3.738F, 2.5F, 4.11F, 2.5F, 4.5F)
          curveTo(2.5F, 6.433F, 4.067F, 8.0F, 6.0F, 8.0F)
          curveToRelative(0.389F, 0.0F, 0.763F, -0.063F, 1.112F, -0.18F)
          lineToRelative(0.732F, 0.73F)
          curveTo(7.292F, 8.839F, 6.664F, 9.0F, 6.0F, 9.0F)
          curveTo(5.271F, 9.0F, 4.588F, 8.805F, 4.0F, 8.465F)
          verticalLineTo(10.5F)
          curveToRelative(0.0F, 0.184F, 0.101F, 0.354F, 0.264F, 0.44F)
          curveToRelative(0.163F, 0.088F, 0.36F, 0.078F, 0.513F, -0.024F)
          lineTo(6.0F, 10.101F)
          lineToRelative(1.223F, 0.815F)
          curveToRelative(0.153F, 0.102F, 0.35F, 0.112F, 0.513F, 0.025F)
          curveTo(7.899F, 10.854F, 8.0F, 10.684F, 8.0F, 10.5F)
          verticalLineTo(8.707F)
          lineToRelative(2.146F, 2.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-9.0F, -9.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(2.68F, 3.388F)
          close()
          moveTo(9.5F, 4.5F)
          curveToRelative(0.0F, 0.808F, -0.274F, 1.552F, -0.734F, 2.145F)
          lineToRelative(-4.91F, -4.911F)
          curveTo(4.447F, 1.274F, 5.191F, 1.0F, 6.0F, 1.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, 1.567F, 3.5F, 3.5F)
          close()        
      }
    }
    return _ribbonOff12!!
  }

private var _ribbonOff12: ImageVector? = null
