package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailCopy24: ImageVector
  get() {
    if (_mailCopy24 != null) {
      return _mailCopy24!!
    }
    _mailCopy24 = fluentIcon(name = "Filled.MailCopy24", 24f) {
      materialPath {
          moveTo(3.0F, 7.511F)
          curveTo(2.097F, 8.09F, 1.5F, 9.1F, 1.5F, 10.25F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 2.9F, 2.35F, 5.25F, 5.25F, 5.25F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.15F, 0.0F, 2.161F, -0.598F, 2.739F, -1.5F)
          horizontalLineTo(6.75F)
          curveTo(4.679F, 20.0F, 3.0F, 18.321F, 3.0F, 16.25F)
          verticalLineTo(7.511F)
          close()
          moveTo(4.0F, 8.11F)
          verticalLineToRelative(7.64F)
          curveToRelative(0.0F, 1.733F, 1.356F, 3.15F, 3.066F, 3.245F)
          lineTo(7.25F, 19.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(1.733F, 0.0F, 3.15F, -1.357F, 3.245F, -3.066F)
          lineTo(22.0F, 15.75F)
          verticalLineTo(8.11F)
          lineToRelative(-8.65F, 4.554F)
          curveToRelative(-0.22F, 0.115F, -0.48F, 0.115F, -0.7F, 0.0F)
          lineTo(4.0F, 8.11F)
          close()
          moveTo(18.75F, 4.0F)
          horizontalLineTo(7.25F)
          curveTo(5.725F, 4.0F, 4.446F, 5.05F, 4.095F, 6.466F)
          lineTo(13.0F, 11.152F)
          lineToRelative(8.905F, -4.686F)
          curveToRelative(-0.336F, -1.357F, -1.525F, -2.378F, -2.966F, -2.46F)
          lineTo(18.75F, 4.0F)
          close()        
      }
    }
    return _mailCopy24!!
  }

private var _mailCopy24: ImageVector? = null
