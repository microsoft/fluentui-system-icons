package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailRead28: ImageVector
  get() {
    if (_mailRead28 != null) {
      return _mailRead28!!
    }
    _mailRead28 = fluentIcon(name = "Filled.MailRead28", 28f) {
      materialPath {
          moveTo(25.0F, 11.828F)
          verticalLineToRelative(8.922F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 24.0F, 3.0F, 22.545F, 3.0F, 20.75F)
          verticalLineToRelative(-8.922F)
          curveToRelative(0.0F, -0.103F, 0.006F, -0.206F, 0.017F, -0.307F)
          lineToRelative(10.585F, 6.615F)
          curveToRelative(0.213F, 0.133F, 0.476F, 0.15F, 0.701F, 0.05F)
          lineToRelative(0.095F, -0.05F)
          lineToRelative(10.585F, -6.615F)
          curveTo(24.994F, 11.622F, 25.0F, 11.725F, 25.0F, 11.828F)
          close()
          moveTo(14.412F, 3.374F)
          lineToRelative(9.35F, 6.157F)
          curveToRelative(0.247F, 0.162F, 0.461F, 0.36F, 0.64F, 0.584F)
          lineTo(14.0F, 16.615F)
          lineToRelative(-10.402F, -6.5F)
          curveToRelative(0.179F, -0.224F, 0.393F, -0.422F, 0.64F, -0.584F)
          lineToRelative(9.35F, -6.157F)
          curveToRelative(0.25F, -0.165F, 0.574F, -0.165F, 0.825F, 0.0F)
          close()        
      }
    }
    return _mailRead28!!
  }

private var _mailRead28: ImageVector? = null
