package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.InkingTool20: ImageVector
  get() {
    if (_inkingTool20 != null) {
      return _inkingTool20!!
    }
    _inkingTool20 = fluentIcon(name = "Filled.InkingTool20", 20f) {
      materialPath {
          moveTo(8.52F, 15.0F)
          curveToRelative(-0.014F, 0.165F, -0.02F, 0.332F, -0.02F, 0.5F)
          curveToRelative(0.0F, 0.582F, 0.072F, 1.162F, 0.273F, 1.616F)
          curveTo(8.981F, 17.586F, 9.373F, 18.0F, 10.0F, 18.0F)
          curveToRelative(0.627F, 0.0F, 1.019F, -0.414F, 1.227F, -0.884F)
          curveToRelative(0.2F, -0.454F, 0.273F, -1.034F, 0.273F, -1.616F)
          curveToRelative(0.0F, -0.168F, -0.006F, -0.335F, -0.02F, -0.5F)
          horizontalLineTo(8.52F)
          close()
          moveTo(2.5F, 5.5F)
          verticalLineToRelative(-3.0F)
          curveTo(2.5F, 2.224F, 2.724F, 2.0F, 3.0F, 2.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(3.0F)
          curveTo(17.5F, 6.328F, 16.828F, 7.0F, 16.0F, 7.0F)
          horizontalLineTo(4.0F)
          curveTo(3.172F, 7.0F, 2.5F, 6.328F, 2.5F, 5.5F)
          close()
          moveTo(4.75F, 8.0F)
          lineToRelative(2.724F, 5.447F)
          curveTo(7.643F, 13.786F, 7.989F, 14.0F, 8.368F, 14.0F)
          horizontalLineToRelative(3.264F)
          curveToRelative(0.379F, 0.0F, 0.725F, -0.214F, 0.894F, -0.553F)
          lineTo(15.25F, 8.0F)
          horizontalLineTo(4.75F)
          close()        
      }
    }
    return _inkingTool20!!
  }

private var _inkingTool20: ImageVector? = null
