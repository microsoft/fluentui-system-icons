package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Bluetooth16: ImageVector
  get() {
    if (_bluetooth16 != null) {
      return _bluetooth16!!
    }
    _bluetooth16 = fluentIcon(name = "Filled.Bluetooth16", 16f) {
      materialPath {
          moveTo(7.415F, 1.08F)
          curveTo(7.669F, 0.951F, 7.973F, 0.98F, 8.2F, 1.15F)
          lineToRelative(4.0F, 3.0F)
          curveToRelative(0.185F, 0.139F, 0.295F, 0.354F, 0.3F, 0.585F)
          curveToRelative(0.004F, 0.231F, -0.098F, 0.451F, -0.277F, 0.597F)
          lineTo(8.939F, 8.0F)
          lineToRelative(3.284F, 2.668F)
          curveToRelative(0.18F, 0.146F, 0.281F, 0.366F, 0.277F, 0.597F)
          curveToRelative(-0.005F, 0.23F, -0.115F, 0.446F, -0.3F, 0.585F)
          lineToRelative(-4.0F, 3.0F)
          curveToRelative(-0.227F, 0.17F, -0.531F, 0.198F, -0.785F, 0.07F)
          curveTo(7.16F, 14.795F, 7.0F, 14.535F, 7.0F, 14.25F)
          verticalLineTo(9.576F)
          lineToRelative(-2.777F, 2.256F)
          curveToRelative(-0.321F, 0.261F, -0.794F, 0.212F, -1.055F, -0.11F)
          curveToRelative(-0.261F, -0.32F, -0.212F, -0.793F, 0.11F, -1.054F)
          lineTo(6.56F, 8.0F)
          lineTo(3.277F, 5.332F)
          curveToRelative(-0.321F, -0.261F, -0.37F, -0.734F, -0.11F, -1.055F)
          curveToRelative(0.262F, -0.321F, 0.735F, -0.37F, 1.056F, -0.11F)
          lineTo(7.0F, 6.425F)
          verticalLineTo(1.75F)
          curveToRelative(0.0F, -0.284F, 0.16F, -0.544F, 0.415F, -0.67F)
          close()
          moveTo(8.5F, 9.575F)
          verticalLineToRelative(3.174F)
          lineToRelative(2.032F, -1.524F)
          lineTo(8.5F, 9.576F)
          close()
          moveToRelative(0.0F, -3.152F)
          lineToRelative(2.032F, -1.65F)
          lineTo(8.5F, 3.25F)
          verticalLineToRelative(3.174F)
          close()        
      }
    }
    return _bluetooth16!!
  }

private var _bluetooth16: ImageVector? = null
