package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailMultiple24: ImageVector
  get() {
    if (_mailMultiple24 != null) {
      return _mailMultiple24!!
    }
    _mailMultiple24 = fluentIcon(name = "Filled.MailMultiple24", 24f) {
      materialPath {
          moveTo(21.0F, 7.511F)
          curveToRelative(0.902F, 0.578F, 1.5F, 1.589F, 1.5F, 2.739F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 2.9F, -2.35F, 5.25F, -5.25F, 5.25F)
          horizontalLineToRelative(-9.0F)
          curveToRelative(-1.15F, 0.0F, -2.161F, -0.598F, -2.739F, -1.5F)
          horizontalLineTo(17.25F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(7.511F)
          close()
          moveTo(20.0F, 8.11F)
          verticalLineToRelative(7.64F)
          curveToRelative(0.0F, 1.733F, -1.357F, 3.15F, -3.066F, 3.245F)
          lineTo(16.75F, 19.0F)
          horizontalLineTo(5.25F)
          curveToRelative(-1.733F, 0.0F, -3.15F, -1.357F, -3.245F, -3.066F)
          lineTo(2.0F, 15.75F)
          verticalLineTo(8.11F)
          lineToRelative(8.65F, 4.554F)
          curveToRelative(0.22F, 0.115F, 0.48F, 0.115F, 0.7F, 0.0F)
          lineTo(20.0F, 8.11F)
          close()
          moveTo(5.25F, 4.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(1.525F, 0.0F, 2.804F, 1.05F, 3.155F, 2.466F)
          lineTo(11.0F, 11.152F)
          lineTo(2.095F, 6.466F)
          curveTo(2.431F, 5.11F, 3.62F, 4.088F, 5.061F, 4.006F)
          lineTo(5.25F, 4.0F)
          close()        
      }
    }
    return _mailMultiple24!!
  }

private var _mailMultiple24: ImageVector? = null
